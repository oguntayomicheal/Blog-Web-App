"use server";

import prisma from "@/lib/prismadb";

import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const desc = formData.get("description") as string;
  const cat = formData.get("category") as string;
  const userEmail = formData.get("email") as string;
  const image = formData.get("image") as string;

  await prisma.blog.create({
    data: {
      img: image,
      title: title,
      category: cat,
      userEmail: userEmail,
      desc: desc,
    },
  });

  revalidatePath("/create");
}


export async function deletePost(formData: FormData) {
    const id = formData.get('postId') as string

    await prisma.blog.delete({
     where: {
        id: id
     }
    })

    revalidatePath('/userposts')
}