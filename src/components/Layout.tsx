import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div style={{minHeight:"98vh", display:"flex", flexDirection: "column", justifyContent:"space-between"}}>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};
export default Layout;
