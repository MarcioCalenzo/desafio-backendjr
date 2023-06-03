import qs from "query-string";
import axios from "axios";

function redirectToGithub() {
  const GITHUB_AUTH_URL = "https://github.com/login/oauth/authorize";
  const params = {
    response_type: "code",
    scope: "user",
    client_id: "8845fa18c5e71ce9464a",
    redirect_uri: "http://localhost:1234/",
  };

  const queryStrings = qs.stringify(params);
  const authorizationUrl = `${GITHUB_AUTH_URL}?${queryStrings}`;
  window.location.href = authorizationUrl;
}

window.onload = async () => {
  document.querySelector(".login").addEventListener("click", redirectToGithub);

  const { code } = qs.parseUrl(window.location.href).query;
  if (code) {
    try {
      const response = await axios.post(`http://localhost:3000/tokengit`, {
        code,
      });
      const user = response.data;
      console.log(user);
      Login(user);
    } catch (err) {
      console.log("err", err);
    }
  }
};

document.getElementById("logadoId").addEventListener("click", function (event) {
  event.preventDefault();

  axios
    .get("http://localhost:3000/persons")
    .then(function (response) {
      const jsonString = JSON.stringify(response.data);
      document.open();
      document.write(jsonString);
      document.close();
    })
    .catch(function (error) {
      console.error(error);
    });
});

document.getElementById("csvForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const csvFile = document.getElementById("csvFile").files[0];

  if (csvFile) {
    const fileExtension = csvFile.name.split(".").pop().toLowerCase();

    if (fileExtension !== "csv") {
      alert("Arquivo invalido !");
      return;
    }

    const formData = new FormData();
    formData.append("csvFile", csvFile);

    axios
      .post("http://localhost:3000/persons", formData)
      .then(function (response) {
        alert("CSV importado com sucesso !");
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    alert("Arquivo invalido !");
  }
});

function Login(data) {
  const loginDiv = document.querySelector(".loginGithub");
  const logadoDiv = document.querySelector(".logadoGithub");

  loginDiv.style.display = "none";
  logadoDiv.style.display = "block";
  logadoDiv.querySelector("h1").textContent = `Bem vindo , ${data.name} !`;
}

function Logout() {
  const loginDiv = document.querySelector(".loginGithub");
  const logadoDiv = document.querySelector(".logadoGithub");

  loginDiv.style.display = "block";
  logadoDiv.style.display = "none";
  logadoDiv.querySelector("h1").textContent = "";
}
