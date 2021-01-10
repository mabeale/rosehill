const settings = {
  name: "rosehill",
  state: {
    frontity: {
      url: "http://www.rosehillbodyshop.com/WP",
      title: "Rose Hill Body Shop",
      description:
        "We are a well established local accident repair business, since 1986, with many years experience in the car body repair trade.",
    },
  },
  packages: [
    {
      name: "rosehill-theme",
      //name: "frontity-chakra-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://www.rosehillbodyshop.com/WP/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
