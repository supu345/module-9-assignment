exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create Post" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read Post" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete Post" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update Post" });
};
