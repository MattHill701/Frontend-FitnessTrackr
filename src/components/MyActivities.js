import { deleteRoutine, attachActivities, deleteActivities } from "../api";
import { getUser } from "../auth";

const MyActivities = (param) => {
  return (
    <form
      id="newPostSubmit"
      onSubmit={async (event) => {
        event.preventDefault();
        try {
          const data = await deleteActivities(param.routineActivityId);
          console.log(data, "!!!!!!!!");
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <button type="submit">DELETE ME</button>
    </form>
  );
};

export default MyActivities;
