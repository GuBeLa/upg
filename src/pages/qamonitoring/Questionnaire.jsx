import { useQuery } from "@tanstack/react-query";
import { post } from "@/api/APIService";

export const Component = function Questionnaire() {
  // let deckId;
  // const { data: todos, isLoading } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: () => getTodos(deckId),
  // });

  // console.log(todos, "QUERY");

  console.log("RENDER COUNT");
  // async function getTodos() {
  //   const { data } = await post("Users/StatusVisibility", null, null);
  //   return data;
  // }

  function shouldNotRerender() {
    console.log("SHOULD NOT MORE THAN ONCE");
  }

  shouldNotRerender();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <p>ALOOOOOOOOO</p>
    </div>
  );
};
