import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async (props: { params: Params }) => {
  const params = await props.params;

  const { type } = params;

  const transformation = transformationTypes[type];

  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <div className="w-full h-full md:h-dvh flex justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="max-w-7xl w-full flex flex-col items-center h-full py-5">
        <Header
          title={transformation.title}
          subtitle={transformation.subTitle}
        />

        <section className="mt-2">
          <TransformationForm
            action="Add"
            userId={user._id}
            type={transformation.type as TransformationTypeKey}
            creditBalance={user.creditBalance}
          />
        </section>
      </div>
    </div>
  );
};

export default AddTransformationTypePage;
