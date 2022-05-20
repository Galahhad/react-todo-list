import { GiRoundStar } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";

const Todo = ({ todo, deleteTodo, addCheck }) => {
  return (
    <div className="Todos">
      {todo.map((todo, index) => {
        return (
          <div
            className={`Todo ${todo.checked ? "checked checked_star" : ""}`}
            key={index}
          >
            <button
              title="избранное"
              onClick={() => addCheck(index)}
              className="star_button"
            >
              <GiRoundStar className="litle_star" />
            </button>
            <p>{todo.text}</p>
            <div>
              {!todo.checked && (
                <button
                  title="удалить"
                  onClick={() => deleteTodo(index)}
                  className="trash_button"
                >
                  <FaTrashAlt className="trash" />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
