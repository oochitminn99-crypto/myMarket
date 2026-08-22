import { Trash2, UserRoundCheck, UserRoundX } from "lucide-react";
import Link from "next/link";

export default function SellerRequest() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6 text-center">

            </h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-3 border">Email</th>
                            <th className="p-3 border">Seller Name</th>
                            <th className="p-3 border">Messages</th>
                            <th className="p-3 border text-center">Accept</th>
                            <th className="p-3 border text-center">Reject</th>
                            <th className="p-3 border text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="p-3 border">snow@gmail.com</td>
                            <td className="p-3 border">snow</td>
                            <td className="p-3 border">I'm a your seller, snow.</td>
                            <td className="p-3 border text-center">
                                <Link href={``}
                                    className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition inline-flex items-center justify-center"
                                >
                                    <UserRoundCheck className="text-green-600 w-5 h-5" />
                                </Link>
                            </td>
                            <td className="p-3 border text-center">
                                <Link href={``}
                                    className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition inline-flex items-center justify-center"
                                >
                                    <UserRoundX className="text-red-600 w-5 h-5" />
                                </Link>
                            </td>
                            <td className="p-3 border text-center">
                                <Link href={``}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition inline-flex items-center justify-center"
                                >
                                    <Trash2 className="text-gray-600 w-5 h-5" />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}