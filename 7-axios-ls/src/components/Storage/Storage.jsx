import "./Storage.scss";

export const Storage = () => {
  localStorage.setItem("name", "Sebastian");
  localStorage.setItem(
    "person",
    JSON.stringify({
      name: "Sebastian",
      age: 43,
      isMarried: true,
    })
  );

  // valueFromLs ALLTID kommer att vara text, oavsett vi vill eller inte :)
  let valueFromLs = localStorage.getItem("person");
  console.log(valueFromLs);

  // valueFromLs = "{ 'name': 'Sebastian', .... }"

  // Om vi vet att valueFromLs egentligen är ett objekt/lista - använd JSON.parse för att få JSON
  let objectFromLs = JSON.parse(valueFromLs);
  console.log(objectFromLs);

  // objectFromLs = { name: "Sebastian" ... }

  return <>{valueFromLs ? objectFromLs.name : "Ingeting hittades"}</>;
};
