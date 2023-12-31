import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utility/sectorUtility";
import baseUrl from "../config";
import RegisterPage from "./RegisterPage";
function UpdatePage() {
  let { id } = useParams();

  const swrUser = useSWR(`${baseUrl}/users/${id}`, fetcher);

  return <RegisterPage swrUser={swrUser} />
}

export default UpdatePage;
