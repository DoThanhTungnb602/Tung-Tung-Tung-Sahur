"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    return (
        <Link href="/" className="paper-btn margin-bottom" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <ArrowLeft size={20} />
            Back to Home
        </Link>
    );
}
