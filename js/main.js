class Router {
  constructor() {
    if (Router.instance) {
      return Router.instance;
    } else {
      Router.instance = this;
    }
  }

  getInstance() {
    return this.instance;
  }

  pushPath(state = {}, path = '/') {
    const queryParam = new URLSearchParams(state);
    this.pageName = state.pageName;
    window.history.pushState(state, '', `?${queryParam.toString()}`);
  }

  getPath() {
    const param = new URLSearchParams(window.location.search);
    this.pageName = param.get('pageName');
  }
}

window.$R = new Router();

const App = () => {
  const [path, setPath] = React.useState('');
  const [contentComponent, setContentComponent] = React.useState(<HomeMain />);

  React.useEffect(() => {
    $R.pushPath({ pageName: path }, path);

    switch ($R.pageName) {
      case 'login':
        setContentComponent(<Login setPath={setPath} />);
        break;
      case 'donate':
        setContentComponent(<Donate setPath={setPath} />);
        break;
      case 'biz':
        console.log('biz >> ');
        setContentComponent(<Biz />);
        break;
      case 'about':
        setContentComponent(<About />);
        break;
      case 'notion':
        setContentComponent(<Notion />);
        break;
      default:
        setContentComponent([<MainVisual />, <HomeMain />, <HomeCarousel />]);
        break;
    }
  }, [path]);

  return (
    <div>
      <Header path={path} setPath={setPath} />

      {contentComponent}

      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

window.$api_url =
  window.location.hostname == 'gianttree.or.kr'
    ? 'https://tomhoon.my'
    : 'https://localhost:23000';

console.log('window.location.hostname >>> ', window.location.hostname);
