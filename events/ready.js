module.exports = (client) => {
  console.log(
    `Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`
  );

  const activities = [`Giveaways in ${client.guilds.cache.size} guilds`,"g!help",`over ${client.users.cache.size} users!`];
  setInterval(() => {
    client.user.setActivity("Booster Memes @YT", { type: "WATCHING" });
  });

};
