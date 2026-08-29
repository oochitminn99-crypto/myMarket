"use server";

import axios from "axios";

export type Errors = {
    reason?: string;
}
export type FormState = {
    errors: Errors;
    success?: string;
    error?: string;
}
 
export  async function AcceptMessage(id: string, prevState: FormState, formData: FormData) : Promise<FormState> {
    try {
        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/seller/seller-msg/accept`,
            {id},
            {validateStatus: () => true},
        );
        if (res.status === 201) {
            return { errors: {}, success: res.data.message };
        } else {
            return { errors: {}, error: res.data.error || "Something went wrong" };
        }
    } catch(error) {
        console.error("Server Action Error:", error);
        return { errors: {}, error: "Server error, Try Later." };
    }
}