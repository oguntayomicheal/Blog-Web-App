'use client'

import Form from "../ui/Form"
import Input from "../ui/input"
import { useEdgeStore } from "@/lib/edgestore"
import Button from "../ui/button"
import { useEffect, useState } from "react"
import { SingleImageDropzone } from "../ui/SingleImageDropZone"


const CreateForm = ({ user } :any) => {

    const [file, setFile] = useState<File>()
    const edgestore = useEdgeStore()
    const [imagePath, setImagePath] = useState('')

    const uploadImageHandler = async () => {
        if (file) {
            const res = await edgestore.edgestore.publicFiles.upload({
                file,
                //   onProgressChange: (progress:any) => {
                //     // you can use this to show a progress bar
                //     console.log(progress);
                //   },
            });

            setImagePath(res.url)
        }


    }

    useEffect(() => {
        if (file) {
            uploadImageHandler()
        }
    }, [file])



    return (
        <div className="mt-8 mx-auto w-full max-w-3xl px-4">
            <div className="bg-white py-8 shadow rounded-lg px-10">
                <h1 className="text-center text-2xl font-extrabold mb-10">
                    Create a Post ✍️
                </h1>
            </div>

            {!user ? (
                <h2 className="text-center text-xl font-extrabold uppercase">
                    Please Sign up or Log in to create a post?
                </h2>
            ) : (
                <>
                <SingleImageDropzone />
                
                </>
            )


            }

        </div>
    )
}

export default CreateForm