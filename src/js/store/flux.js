const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URL_API: "https://www.swapi.tech/api",
      peoples: [],
      favorites: [],
    },
    actions: {
      getPeople: async () => {
        try {
          let response = await fetch(`${getStore().URL_API}/people`);
          if (response.ok) {
            const body = await response.json();
            setStore({ peoples: body.results });
          }
        } catch (error) {
          console.log(error);
        }
      },

      addToFavorites: (_name, _url, _isFav) => {
        const favs = [
          ...getStore().favorites,
          { favName: _name, url: _url, _isFav: _isFav },
        ];
        setStore({ favorites: favs });
        return favs;
      },

      removeFavorite: (index) => {
        const newFav = getStore().favorites.filter((favs, i) => i !== index);
        setStore({ favorites: newFav });
      },
    }
  };
};

export default getState;
