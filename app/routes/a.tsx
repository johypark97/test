import { Link } from "react-router";
import { useSearchParams } from "react-router";

export default function A() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <main>
        <p>id: {searchParams.get("id")}</p>
        <p>BASE_URL: '{import.meta.env.BASE_URL}'</p>
      </main>
    </>
  );
}
