import React, { useEffect } from "react";
import "./Home.css";
import User from "../User/User";
import Post from "../Post/Post";
import { getFollowingPost } from "../../Actions/User";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { Typography } from "@mui/material";
function Home() {
  const { loading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFollowingPost());
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="home">
      <div className="homeleft">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post._id}
              postId={post._id}
              caption={post.caption}
              postImage={post.image.url}
              likes={post.likes}
              coments={post.comments}
              ownerImage={post.owner.avatar.url}
              ownerName={post.owner.name}
              ownerId={post.owner._id}
            />
          ))
        ) : (
          <Typography variant="h6">No posts yet</Typography>
        )}
      </div>

      <div className="homeright">
        <User
          userId={"user.id"}
          name={"user.name"}
          avatar="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA7wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAEAQAAEDAgMEBQoDBwQDAAAAAAEAAgMEEQUSIRMxQVEGFFJTkRUiMkJhcYGSodFigrEHIzNDouHwNFSjwSRjk//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDxpIJIhA5oUltExqfwQMfuUJU7tyhylzgG8UDqeF00rWNHxXX4VQiGMEgXsqGC0GWz3tXQgBjLIE82sAo+KRNyiEBQKKBQMKCcUCgCIQRCBJwTQiEAeFC8KwVE8IKc8eYG4WTVQanRbrhdVJ4rgoOYnhIcoCtmqg1KyposrkEJQRQKAJJJIEkkkgspwTbJwQPCdbRNanlAxwWhhVAZHh7gd6ho6Yzyi40XU0VK2GMABBPTxNjZlsk91ynPNtyjKBIoIhA5AolAoGlAolBAEQgigISSCSA3QIukiEEDgontvorLxdQuagoVENwVkVUG/RdA9twqNRDcHRBzcrMpUS0qmG19FnyNyoGJJJIEkkkgtBOCFkQgcFKxhe4AKNu9aeGU5fIHEINXCaYMbchar35W6JkTREzVQSyXJQPL7oZlBmRzIJ7hFpVfMntcgnugXKPMmucgkLggXKIuTcyCa6OZQZkcyCe6V1DmRzIJbpXUOZHMgluExwTcyWa6Bjgq8rQQpnFQyFBm1MQ1WXURb1tzjQrMqRvQZL22QU0oUKBJJJILacE1EFBNCwve0BdRhdOGMBIWLhcGZ+YrpAdjEANNECqJgbt5KoXJskl3EqMuQSZkcygzI50Ewcntcq+dPa5BYzJjnJubRMc5A8uTcyjLk3Mgmza/ZXoMLxKcB0NDO9vDzLfqus6AYdSviMskbXz2Di86mx4DktKmxjET0pkwyXDstI3NllDToA24cTusTog4KbCsTp2F89BOxo45b/oqeZej9IazGI66jODwMqqKTSQsAcCb6gm+gtxXNdO8LjoauGqhZkZPcOaN2Yf4fBBzmb2o5lC1yJcgkzIh9uKgzJZkE5NwoXpByDjdBXmGhWdUjetKXcqFQNEGXMFWKuThVHIAkkkgtXUkLc7wBrqrowuQrQw7CHXzHggsYfGIo8xUs8pcblTmkIaALqJ1G48SgqOcm5laNE48Sm9QdzKCtmRzKz1A80uoHmgrhyla5PFERxTxSkIIi7RMLlYNKUDSmyCqXJuZWXUpCHVSEHofQGdgrxFwNOwnwWh0qx6jo63yHWQz2q48jpozbKHebpz38Fg9C3iOqp3XAc2LI4+5dtU1eFyOjlrG075Yv4bnNBc33IOVkYegOEZoGyV3WKgBxd5jIhlOptuvYfFR9N6iPEOilLXCN0ZkcyQMfvbfTXxXSVnSLDI2WkkFj2houK6Y4xHidO2CE/uy4Hcg40O1SzKQQcykYggizI5k/ZhLZhBGXoh904sCblAKBr9yp1AWhlaQq80TSgxZwqcm9a88LVRliagqIKfI1LI3mg6kVcgcA5ltVfjr8jBYKJuHOe4ue74XTzhwNvOKB3lEngmuxA8khhzeZSOHNHrFBG7EXDgntq5ZB5rVBVUrIG57qBta9jbNaPfZBe203JLbTcgqXX5OyPBA18nZHggvbWbspbWa1yFR67IeCtYY2pxOvhoom3fM7KPv7kHRdG+j9TjdO6qkm2FO12VpDMxcePFQzYK2bEanDcNxBs1bTjM+mniMTnDm07ivXcPwWOhwqGkpm2bEwAe081zfSGlxOAx1WDw0bquI2cKpnpx8Whw1bwQeUVjqikndBVRuilbvY4WKrmrcvWsZwii6RYY10giMobdk0bg7I7iMw3jgvLJqFsMr4njz2OLSL8Rog1OjLsUq6kw4dT7Un0nE5Wt95XbO6KYvM09ZxWlhDtC2Cnc4j85cP0Tv2fzUkO1wyFuWSANubekSL39u9dVVukZDIYWh0wacjXGwLrafVBw9X0Mr4acilxKGoeLnLPAQT+bMf0XD10VXFVOgqgWSx6FtrWXqPRTEsbroJx0hw9tJNGRlczQPve9hc2tprfW6wP2nUB6rDicAG0jcI5bDe07vr+qDhMr+0VHK57N6iL5uRSBkLxtASEB2ruaW0KkIjHEIfu/Ygj2hQzlSnZ+xNJi5hAWG41KT2gjemPLLXa4BRAudoLlBFPGOapTRjmrkrJORVKWKRBXczkVEb3Uro5LoCN44IOiD6nnJ4FOz1X/t+q0vKNP3zPkKXlKn71p/IUGcHVR3bVHNUi2YvaObty0BiNOTbMD+UqvXNqalwDIrRjdrvQStEIYBJM154klBxpR67FQ8n1JH8L6pjsOqu6/qCDQzU3bjQL6XvI1QGGVfdD5gj5Mqz6jfmQXc9NwfGvRf2Z4QxkcmLyMGZ92QEj1eJ+P/AEvLThdWPVb84Xrn7N8Ypq3BYqJj27alYGOZu0A3oOyNQ9uoduTnPjqmZJWi5G/muW6c4DjOMUtN5AxMUc8Mhc4Okcxrxw1aCdOVrLepYpYaeJk8gkka0B8gFsxA1KDnpcLwropFiNbRRuibNZ8kYeS3ML+iOBN149MamevdUyscC+XO74m67D9pvSmPykzC4cz2RedOWn1uA+G/4hcgzE6dzb3m9um5B1PR/GRR4pSVFTCYpJCyN7huJLywf57V7FkjmizZg1/I7l4dhNYzEZqWDJnjZvLhq1zHNLfv8F13STpXWU9OafCQ0zgAFz3WAQdtOYob55GC3t0XIdN8RpnYPOxr2usL6G64iqr6+anL66uyyEavv5oPxKy6uQw0gpn1ZmfOfSdoLez2IAa2J2t0w1cXM+CgNDNb0o/FDqUnFzUAI2sh2eqc6A6W+KdFTyRPz52/dA1wBtkKBuxcOAQMLvwp/Xh2D4oOrR2D4oI9i78KcwPjN7iyHXB3Z8U01g7v6oHyVHMEWVWWcck6WcSNsW2PvTXU7XtBD/ogqvnHJM24Ur6Udv6KM0w7Z8EHQ+RcQ7j+oIjBa/uf6guj6wz/AHEf/wBFSxOrlZDkow+R79M0d3BoQZlBHDSzOdVyxiRhsGamx53AWj5RpO/Z4H7LD6pU5v8ATzHibsKDqSpv/p5fkKDbOI0p/nj5SmHEaTvx8hWL1WpykdXl+QprqWoGogl+QoNs4jR/7j/jP2TTiFFbSo/43fZYopanuJflKQpKm2tPL8pQa7546qN8VHLnlc3QZS0W95Cr4dSYvh1fFWUEuzlZuyyAXHI81LgjGU7ZXzPZG8+bZxsQF0mFwMq3NPWWlvseEHU4X00qGtZHiWHTZ7aywZXDwvcJvSHplLHRSNwuimfUOBDXSjK1p5lGCKlgb/Fbpzeoq2GmnhcBMwadtB5TLg+I1Ez5qlwfJI7M5xdqSiMGqh6LWj8y6KrMMEjmOqWEg9v+6qOqaXv4/mQUKGgxOkqNrRyMY8nzg52jlPOWVU7TXTvY9jvOjjkIa4++1/qtSlfSZmgyx+cOazMToHOqpJIo3OZmJa5o0KB+JPpaiNoc1tmHzbx57e65AWU5lFti+Y1Mz/x2H6K1LS1EjG3hk0N9yr1FHPkuIn+CB5xCn7EngPuh1+n7t/gPuqfVKjuX+CHVZ+6cgt+UIj/Kf9Puq7g2qmJjtGbXs7+yZ1WfunIx09TG9rgw6FA80Txvkb8AUuqO7wH4FWnVELSWlxBG8HgmGqgHrX+CCsaR3b+iBpHdr6KwauDmozVxX9JBD1R3a+ifHC+Mkh9weFkTVw/5dDrUfA/qgrzzljspi196gNVr/DHzK3PJFK3U687KiKWR2rLEe0oOjw2ikrpcjdI/WIG5dVFTMhibHGwBrRoFysdfLThwp/MYTuTvK1WdNp9EHVbL8I8Utnbe0LlfKlV3iHlSq7xB1RiB1s1MMbeTVyxxSqPrppxSr7z6IOpLGc2KN4jYwuLm2AuuXOJ1fefRXcLlnxCo2cjrxgecLb0GRVS7aplkdrmK6vozl2DdwTzg9HfSALewTDqVgAbEBZBSr3uADWa6cFLGfMbm5Lo3YdTOFzELqN9HTMFtmNEHnXSGla6R0ga3XfoubcPPtwuvUsSoqZ4deIFc47DKXaH9yN6DEpQdoy2p4Lt6WkbLQW7JVehwyldK0iIaLTxD/wANloBlaQgzX0rcpAv4KnVxNZA64d4J3W5Tfz1k4vWzNiIbIUDS9vJyYXj2+CxHVk/eFNNXOf5hQbRLeTkHEdlyxTVT94Uusz945BZxGG52rGn8V1nF3tUzqiU2zPJHIrUpmQzRNds234oMIlNv7V0ToIeEbfBRmni7DfBBhJLbNPF2AmmCLsBBjJNeYzoStcwx8GhNMLOyEDASAUWm5RSQFuqV0kkA4JpSSQMO5dL0XjaKdzx6RSSQbdzzVygkcH3BRSQbglcY7kqnUSv11SSQZ1S9xvrwWSSc6SSDWwveljxIjGqSSDm85AKxcUcSCEkkGRe6I1QSQOO4IHckkgCu4U4h5bfRFJBqOAUTt6KSCMphQSQAphSSQf/Z"
        />
      </div>
    </div>
  );
}

export default Home;
