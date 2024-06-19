import { create } from "@/actions/create-board";

const OrganizationIdPage = () => {
    return (
        <div className="">
            <form action={create}>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Введите название"
                    className="border-black border p-1"
                    required />
            </form>
        </div>
    );
}

export default OrganizationIdPage;