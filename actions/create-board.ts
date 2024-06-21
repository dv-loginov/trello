"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
    errors?: {
        title?: string[];
    };
    message?: string | null;
}

const CreateBoardSchema = z.object({
    title: z.string().min(3, { message: "Минимальная длинна 3 символа" }),
});

export async function create(prevState: State, formData: FormData) {

    const validatedFields = CreateBoardSchema.safeParse({ title: formData.get("title") })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Ошибка валидации",
        }
    }

    const { title } = validatedFields.data;

    try {
        await db.board.create({
            data: { title, }
        });
    } catch (error) {
        return { message: "Ошибка создания", }
    }

    revalidatePath("/organization/org_2gEMQVjdzPAYYGklJJb9Hq96lQE");
    redirect("/organization/org_2gEMQVjdzPAYYGklJJb9Hq96lQE");
}