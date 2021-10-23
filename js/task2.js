const url = new URL(
  "http://любой_домен/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd"
);

const params = new URLSearchParams(url.search);
const arr_params = [...params];

arr_params.forEach((elem) => {
  const select_name = String(elem[0]) + "_" + String(elem[1]);
  const select_doc = document.getElementById(select_name);
  if (select_doc !== null) {
    if (String(elem[0]) === "manufacturer") {
      select_doc.selected = true;
    } else {
      select_doc.checked = true;
    }
  }
});

addEventListener("input", ({ target }) => {
  if (!target.matches("form [name]")) return;

  const changed_url = `http://любой_домен/filter?${new URLSearchParams(
    new FormData(target.form)
  )}`;

  console.log(changed_url);
});
