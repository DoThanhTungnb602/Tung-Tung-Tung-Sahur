import { CppProblems } from "../data/leetcode";
import clsx from "clsx";
import BackButton from "../components/BackButton";

export default function LeetCodePage() {
    return (
        <div className="paper">
            <h1 className="text-3xl font-bold mb-6 text-center">LeetCode Tracker</h1>

            <table className="table-hover table-striped">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Title</th>
                        <th>Difficulty</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {CppProblems.map((p) => (
                        <tr key={p.id}>
                            <td>
                                <span className={clsx("badge", p.completed ? "success" : "secondary")}>
                                    {p.completed ? "Done" : "Todo"}
                                </span>
                            </td>
                            <td>{p.title}</td>
                            <td>
                                <span className={clsx(
                                    "text-sm font-bold",
                                    p.difficulty === "Easy" ? "text-green-600" :
                                        p.difficulty === "Medium" ? "text-yellow-600" : "text-red-600"
                                )}>
                                    {p.difficulty}
                                </span>
                            </td>
                            <td>{p.category}</td>
                            <td>
                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="paper-btn btn-small btn-primary font-bold">
                                    Solve
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
