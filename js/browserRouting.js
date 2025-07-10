window.addEventListener('popstate', (e) => {
  const params = new URLSearchParams(location.href);
  const pageName = params.get('pageName');

  const remove중복 = [...new Set(history.state)];
  const backwardPage = remove중복.pop();

  let newState = [...remove중복];

  window.history.replaceState({ ...e.state }, '', window.location.pathname);

  setPath(backwardPage || '');
});
