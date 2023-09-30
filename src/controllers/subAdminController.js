exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create subadmin" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read subadmin" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete subadmin" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update subadmin" });
};
