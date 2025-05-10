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
    window.history.pushState(state, "", `?${queryParam.toString()}`);
  }

  getPath() {
    const param = new URLSearchParams(window.location.search);
    this.pageName = param.get("pageName");
  }
}

window.$R = new Router();

const App = () => {
  const [path, setPath] = React.useState('');
  const [contentComponent, setContentComponent] = React.useState(<HomeMain/>);

  React.useEffect(() => {

    $R.pushPath({pageName: path}, path);

    console.log('..... ', contentComponent);
    console.log('..... ', $R.pageName);

    switch($R.pageName) {
      case 'about':
        setContentComponent(<About/>);
        break;
      case 'notion':
        setContentComponent(<Notion/>);
        break;
      default:
        setContentComponent([<MainVisual/>, <HomeMain/>]);
        break;
    }

  }, [path]);

  return (
    <div>
      <Header setPath={setPath}/>
      
      {contentComponent}

      <HomeCarousel />
      <Footer/>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);