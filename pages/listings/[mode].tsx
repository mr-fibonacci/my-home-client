import { NextPage } from "next";
import { useRouter } from "next/router";
import { FlexGrowLayout } from "../../components/Layouts/Layouts";

const ListingsPage: NextPage = () => {
  const router = useRouter();
  const { mode } = router.query;
  return (
    <FlexGrowLayout>
      <p>{mode} listings!</p>
      <div>filters</div>
      <div>results</div>
    </FlexGrowLayout>
  );
};

export default ListingsPage;
