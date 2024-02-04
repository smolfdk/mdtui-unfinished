import "./globals.css";

import Sidebar from "./components/sidebar"

export const metadata = {
  title: "VXV MDT",
  description: "The official VXV MDT made by smolf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center h-screen w-screen select-none">
        <div className="p-[0.4vh] rounded-[3.3vh] bg-lightborder w-fit h-fit">
          <div className="p-[3vh] rounded-[3vh] bg-darkborder w-fit h-fit">
            <div className="bg-white dark:bg-darkback text-black dark:text-darklightforeground rounded-[1vh] w-[135vh] h-[75vh] flex flex-row overflow-hidden">
              <Sidebar />
              <div className="p-[2vh] w-[103vh]">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
