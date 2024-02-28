"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  const handleClick = (e) => {
    console.log("clicked");
    // will not add a new page to the browser history
    // router.replace("/");
    // Will add a new entry to the browser history
    // router.push("/");
    // rerender the component
    // router.refresh();
    // back and forward
    // router.back() router.forward()
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click Here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
