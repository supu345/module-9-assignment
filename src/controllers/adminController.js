exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create admin" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read admin" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete admin" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update admin" });
};
