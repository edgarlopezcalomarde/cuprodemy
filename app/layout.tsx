

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import ReduxProvider from "@redux/ReduxProvider";
import "@styles/globals.css";


export const metadata = {
  title: "Cuprodemy",
  description: "Discover & Share courses",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="grid-lines"></div>
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            <ReduxProvider >{children}</ReduxProvider>
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
