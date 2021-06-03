module.exports = {
  rules: {
    "pt-jira-ticket": function (parsed) {
      const re = /[A-Z]+-\d+/gi
      const message = parsed.subject || parsed.header
      return [message.match(re), `Subject should contain a jira ticket in the format XXXX-NUMBER`]
    },
  },
}
