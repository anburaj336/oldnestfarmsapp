class WooApi {
  // https://bora.co.th
  // https://mstore.io
  website = "https://oldnestfarms.com";
  baseUrl = this.website + "/wp-json/api/";
  headers = { "Content-Type": "application/json" };

  async getProfile(token) {
    const options = {
      headers: this.headers,
    };
    const res = await fetch(
      this.baseUrl + "flutter_user/get_currentuserinfo?token=" + token,
      options,
    );
    return res;
  }
}

module.exports = WooApi;
