fetch("/endpoint")
  .then((res) => res.json())
  .then(
    (res) => (document.querySelector("pre").textContent = JSON.stringify(res)),
  );
