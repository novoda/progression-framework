const ReactGA = require('react-ga')

ReactGA.initialize('UA-6182198-9')
ReactGA.set({
  appName: 'Progression at Novoda'
})

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname)
}
