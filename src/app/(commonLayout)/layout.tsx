import Footer from "@/src/components/shared/footer";
import Navbar from "@/src/components/shared/nabvar";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/authOptions";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Navbar session={session} />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
