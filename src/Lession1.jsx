import React, { useState } from "react";

function Lession1() {
  const [userAdd, setUserAdd] = useState([]);
  const [dataChange, setDataChange] = useState("");
  const handleChange = (dataInput) => {
    setDataChange(dataInput);
  };
  const handleAddUser = () => {
    if (dataChange === "") {
      alert("Please input data for required field ");
    } else {
      setUserAdd((user) => [...user, dataChange]);
    }
  };
  const deleteUser = (User) => {
    const arrAfterRemove = userAdd.filter((item) => item !== User);
    setUserAdd(arrAfterRemove);
  };
  const moveUpUser = (indexUser) => {
    const array_move = (arrUser, indexUser, indexAfterMove) => {
      //tạo 1 function di chuyển các phần tử, function nhận vào các tham số : mảng , vị trí hiện tại của obj, vị trí -1 (vì obj di chuyển lên nên index - 1)
      arrUser.splice(indexAfterMove, 0, arrUser.splice(indexUser, 1)[0]);
      return arrUser;
    };
    const arrAfterMoveUp = array_move(userAdd, indexUser, indexUser - 1);
    setUserAdd([...arrAfterMoveUp]);
  };
  const moveDownUser = (indexUser) => {
    const array_move = (arrUser, indexUser, indexAfterMove) => {
      arrUser.splice(indexAfterMove, 0, arrUser.splice(indexUser, 1)[0]);
      return arrUser;
    };
    const arrAfterMoveUp = array_move(userAdd, indexUser, indexUser + 1);
    setUserAdd([...arrAfterMoveUp]);
  };
  return (
    <div className="container">
      <div className="content mx-auto w-75 my-5 border ">
        <div className="d-flex align-items-center">
          <input
            onChange={(e) => handleChange(e.target.value)}
            className="w-75"
            style={{ height: "45px" }}
            placeholder="Enter name..."
          />
          <button
            type="button"
            className="btn btn-outline-dark w-25"
            onClick={handleAddUser}
          >
            Add
          </button>
        </div>
        <div>
          {userAdd.length === 0 ? (
            <p>Empty Item</p>
          ) : (
            userAdd.map((item, index) => {
              return index === 0 ? (
                <div
                  className="d-flex justify-content-between my-2"
                  key={index}
                >
                  <div>{item}</div>
                  <div>
                    <button disabled type="button" className="btn btn-success ">
                      Up
                    </button>
                    <button
                      type="button"
                      className="btn btn-success mx-2"
                      onClick={() => moveDownUser(index)}
                    >
                      Down
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteUser(item);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : index === userAdd.length - 1 ? (
                <div
                  className="d-flex justify-content-between my-2"
                  key={index}
                >
                  <div>{item}</div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => moveUpUser(index)}
                    >
                      Up
                    </button>
                    <button
                      disabled
                      type="button"
                      className="btn btn-success mx-2"
                    >
                      Down
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteUser(item);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="d-flex justify-content-between my-2"
                  key={index}
                >
                  <div>{item}</div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => moveUpUser(index)}
                    >
                      Up
                    </button>
                    <button
                      type="button"
                      className="btn btn-success mx-2 "
                      onClick={() => moveDownUser(index)}
                    >
                      Down
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteUser(item);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Lession1;
