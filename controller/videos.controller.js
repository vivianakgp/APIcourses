const VideosServices = require("../servises/videos.servises");
const createVideo = async (req, res, next) => {
  try {
    const video = req.body;
    await VideosServices.postVideo(video);
    res.status(201).json({ status: "video created successfully" });
  } catch (err) {
    next({ status: 400, errMsg: err });
  }
};
module.exports = {
  createVideo,
};
