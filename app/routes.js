// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {

  return [
    {
    path: '/',
    name: 'Home',
    getComponent(nextState, cb) {
      import('containers/Home')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    },

    {
    path: '/details/:id',
    name: 'Details',
    getComponent(nextState, cb) {
      import('containers/Details')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    },

    {
    path: '/dashboard',
    name: 'Dashboard',
    getComponent (nextState, cb) {
        import('containers/Dashboard')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },

    {
    path: '/edit/:id',
    name: 'Edit',
    getComponent (nextState, cb) {
        import('containers/Edit')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },

    {
    path: '/list',
    name: 'List',
    getComponent (nextState, cb) {
        import('containers/List')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },

    {
    path: '/signin',
    name: 'SignIn',
    getComponent (nextState, cb) {
        import('containers/Signin')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },

    {
    path: '/signup',
    name: 'SignUp',
    getComponent (nextState, cb) {
        import('containers/Signup')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },

   {
    path: '*',
    name: 'notfound',
    getComponent(nextState, cb) {
      import('containers/NotFoundPage')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    },
  ];
}
