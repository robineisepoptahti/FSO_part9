import service from "../services/patients";
import { useParams } from "react-router-dom";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
import type { Patient } from "../types";
import { useState, useEffect } from "react";

const genderIcon = (gender: string) => {
  switch (gender) {
    case "male":
      return <MaleIcon />;
    case "female":
      return <FemaleIcon />;
    case "other":
      return <TransgenderIcon />;
    default:
      return null;
  }
};
const PatientPage = () => {
  const id = useParams().id;
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const getPatient = async () => {
      if (id) {
        const foundPatient = await service.getOne(id);
        setPatient(foundPatient);
      }
    };
    void getPatient();
  }, [id]);
  if (patient) {
    return (
      <div>
        <h2>
          {patient.name}
          {genderIcon(patient.gender)}
        </h2>
        <p>ssn: {patient.ssn}</p>
        <p>occupation: {patient.occupation}</p>
      </div>
    );
  }
};

export default PatientPage;
