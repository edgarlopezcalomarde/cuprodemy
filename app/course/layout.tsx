import React from "react";

interface CourseLayoutProps {
  children: React.ReactNode;
}

function CourseLayout({ children }: CourseLayoutProps) {
  return (
    <div>
      <h2>Coourses</h2>
      {/*Migas de pan incoming*/}
      <div>{children}</div>
    </div>
  );
}

export default CourseLayout;
