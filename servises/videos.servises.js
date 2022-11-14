const Videos = require("../models/videos.models");
class VideosServices {
  static async postVideo(newVideo) {
    try {
      await Videos.create(newVideo);
      return true;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = VideosServices;
