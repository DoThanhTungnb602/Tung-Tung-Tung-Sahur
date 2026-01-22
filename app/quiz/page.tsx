"use client";

import { useState } from "react";
import { CppQuiz, QuizQuestion } from "../data/quiz";
import clsx from "clsx";
import BackButton from "../components/BackButton";

export default function QuizPage() {
    const [selectedQuestion, setSelectedQuestion] = useState<QuizQuestion | null>(null);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <BackButton />
                <h1 className="text-3xl font-bold text-center flex-grow">C++ Quiz Challenge</h1>
                <div style={{ width: 100 }}></div> {/* Spacer for centering */}
            </div>

            <div className="row">
                {CppQuiz.map((q, i) => (
                    <div key={q.id} className="col-12 md-col-6 lg-col-4 mb-4">
                        <div
                            className="card"
                            style={{ cursor: "pointer", height: "100%" }}
                            onClick={() => setSelectedQuestion(q)}
                        >
                            <div className="card-body">
                                <h4 className="card-title">Question {i + 1}</h4>
                                <p>{q.question}</p>
                                <div className="text-right mt-2">
                                    <button className="btn-small">Reveal Answer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedQuestion && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
                    {/* Backdrop */}
                    <div
                        className="modal-backdrop"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}
                        onClick={() => setSelectedQuestion(null)}
                    ></div>

                    {/* Modal Content */}
                    <div
                        className="modal show"
                        style={{
                            display: "block",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: '500px',
                            maxWidth: '90%',
                            padding: 0,
                            border: 'none',
                            background: 'transparent'
                        }}
                    >
                        <div className="card" style={{ margin: 0 }}>
                            <div className="card-header flex justify-between items-center bg-white border-b-2 border-black p-4">
                                <h3 className="text-xl font-bold m-0">Answer</h3>
                                <span
                                    className="close cursor-pointer text-2xl hover:text-gray-600"
                                    onClick={() => setSelectedQuestion(null)}
                                >&times;</span>
                            </div>
                            <div className="card-body p-4 bg-white">
                                <p className="font-bold mb-2">Question: {selectedQuestion.question}</p>

                                <div className="alert alert-success bg-mint mb-4 border-2 border-black dashed">
                                    Correct Answer: <strong>{selectedQuestion.answer}</strong>
                                </div>

                                <p><strong>Explanation:</strong> {selectedQuestion.explanation}</p>

                                <div className="text-right mt-4">
                                    <button className="btn-primary paper-btn" onClick={() => setSelectedQuestion(null)}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
