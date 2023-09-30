exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create user" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read user" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete user" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update user" });
};
