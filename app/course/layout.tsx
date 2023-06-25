import React from "react";

interface CourseLayoutProps {
  children: React.ReactNode;
}

function CourseLayout({ children }: CourseLayoutProps) {
  return (
    <section className="w-full px-4 flex flex-col gap-2">
      {children}
    </section>
  );
}

export default CourseLayout;
