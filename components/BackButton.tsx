"use client";

import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} className="mr-auto font-inter text-6xl">
      ⬅
    </button>
  );
}

export default BackButton;
