import CreationForm from "@/components/shared/CreationForm";
import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreationPage = async (props: SearchParamProps) => {
  const params = await props.params;

  const { type } = params;

  const transformation = transformationTypes[type];

  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header
        title={"Image Creation"}
        subtitle={"Create an image from a prompt"}
      />

      <section className="mt-10">
        <h2>Not available</h2>
        <CreationForm userId={user._id} creditBalance={user.creditBalance} />
      </section>
    </>
  );
};

export default CreationPage;
