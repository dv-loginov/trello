"use client"

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

export const Form = () => {
    const initialState = { errors: {}, message: "" };
    const [state, dispatch] = useFormState(create, initialState);

    return (
        <form action={dispatch}>
            <div className="flex flex-col space-y-2">
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Введите название"
                    className="border-black border p-1"
                    required />
                {state?.errors?.title
                    ? (
                        <div>
                            {state.errors.title.map((error: string) => (
                                <p key={error} className="text-rose-500">{error}</p>)
                            )}
                        </div>
                    )
                    : null}
            </div>
            <Button type="submit">Отправить</Button>
        </form>
    );
};