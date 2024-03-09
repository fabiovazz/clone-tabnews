function status(request, response) {
  response.status(200).json({ status: "São alunos" });
}

export default status;
