import type { NextPage } from "next";
import { FlexGrowLayout } from "../components/Layouts/Layouts";
import { useAppSelector } from "../redux/hooks/hooks";
import { selectCurrentUser } from "../redux/reducers/currentUserSlice";

const Home: NextPage = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  return (
    <FlexGrowLayout>
      <p className="text-break">{JSON.stringify(currentUser)}</p>
      <h1>buy</h1>
      <div>Featured</div>
      <div>Trending?</div>
      <div>Recent</div>
      <h1>rent</h1>
      <div>Featured</div>
      <div>Trending?</div>
      <div>Recent</div>
    </FlexGrowLayout>
  );
};

export default Home;
