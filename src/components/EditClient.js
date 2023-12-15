import { useState, useEffect } from "react";

import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

function EditClient() {
  const navigate = useNavigate();

  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Email, setEmail] = useState("");
  const [Tel, setTel] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [imageartpetitf, setImageartpetitf] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3001/client/" + id).then((res) => {
      setNom(res.data.Nom);
      setPrenom(res.data.Prenom);
      setEmail(res.data.Email);
      setTel(res.data.Tel);
      setAdresse(res.data.Adresse);
      setImageartpetitf(res.data.imageartpetitf);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      id: id,
      Nom,
      Prenom,
      Email,
      Tel,
      Adresse,
      imageartpetitf,
    };

    axios
      .put("http://localhost:3001/client/" + id, newClient)
      .then((res) => {
        console.log(res);
        navigate("/client");
      })
      .catch((error) => {
        console.log(error);
        alert("Erreur ! Modification non effectuée");
      });
  };

  return (
    <>
      <div className="container">
        <h2>Modification d'un client </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <div className="col-sm-5 p-2 g-col-6">
              <input
                className="form-control"
                placeholder="Nom"
                name="Nom"
                type="text"
                value={Nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
              <input
                className="form-control"
                placeholder="Prenom"
                type="text"
                value={Prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>

            <div className="col-sm-5 p-2 g-col-6">
              <input
                className="form-control"
                placeholder="Email"
                name="Email"
                type="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
              <input
                className="form-control"
                placeholder="Tel"
                name="Tel"
                type="number"
                value={Tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
              <input
                className="form-control"
                placeholder="Adresse"
                name="Adresse"
                type="text"
                value={Adresse}
                onChange={(e) => setAdresse(e.target.value)}
              />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
              <input
                className="form-control"
                placeholder="Image"
                type="text"
                value={imageartpetitf}
                onChange={(e) => setImageartpetitf(e.target.value)}
              />
            </div>
            <div>
              {imageartpetitf ? (
                <img
                  src={"/" + imageartpetitf}
                  alt={imageartpetitf}
                  width="70"
                />
              ) : null}
            </div>
            <div>
              <button className="btn btn-success">Valider</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditClient;

