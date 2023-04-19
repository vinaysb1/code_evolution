import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name1: "vinay",
      age: 33,
      skill: "React",
    },
    {
      id: 2,
      name1: "snajay",
      age: 33,
      skill: "Node",
    },
    {
      id: 1,
      name1: "Lakshmikanth",
      age: 33,
      skill: "vue",
    }
  ]
  const personList = persons.map(person => <Person person ={person} />)
    return <div>{personList}</div>;
}

export default NameList;
