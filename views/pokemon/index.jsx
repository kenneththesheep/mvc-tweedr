var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props);
    const name = this.props.name;
    let buttonSwitch="";
    const tweet=this.props.tweets.map(tweet=>
        {
            console.log(tweet);
            const url="/tweet/" + tweet.id;
            return <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <p  class={"mt-3"}>Tweet: <a href={url}>{tweet.tweetstext}</a></p>

            <div class = {"row"}>
            <div class = {"col-12 mx-auto border"}>
            {/*<form method="POST" action="/favorite"  style={{textAlign: "Center"}}>
            <input  class= "favorite" type="text" name="favorite_id" value = {tweet.id} style={{display:"none"}} ></input>
            <input  class= "username" type="text" name="username" value = {name} style={{display:"none"}} ></input>
            <input type="submit" value="favorite"></input>
            </form>*/}
            <button class="favorite" value={tweet.id}>Add to Favorite</button>
            </div>
            {/*<div class = {"col-6 mx-auto border"}>
            <form method="POST" action="/favorite?_method=delete"  style={{textAlign: "Center"}}>
            <input  class= "notfavorite" type="text" name="notfavorite_id" value = {tweet.id} style={{display:"none"}} ></input>
            <input  class= "username" type="text" name="username" value = {name} style={{display:"none"}} ></input>
            <input type="submit" value="not favorite"></input>
            </form>
            </div>*/}
            </div>

            </div>
            </div>



        });
        const hash=this.props.hash.map(hash=>
        {
            console.log(hash);
            const url="#";
            return <div class={"col-4 mt-2 text-center"}>

            <label for={hash.id}>{hash.hashtext}</label>
            <input type={"checkbox"} id = {hash.id} name = "hashid" value={hash.id}></input>
            </div>



        });
    if(this.props.isLogin)
    {
        buttonSwitch=[
                     <div class = {"col-12"}>
                    <form method="POST" action="/tweet"  style={{textAlign: "Center"}}>
                    <span>Enter New Tweet:  </span>
                    <input  id= "tweet" type="text" name="tweet" placeholder="Enter Tweet" required
                            oninvalid="this.setCustomValidity('Enter Tweet Here')"
                            oninput="this.setCustomValidity('')" ></input>
                    <br></br><br></br>

                    <span>Enter New Hash in the format # and a space in betwen (#hello #myworld #likes) </span>
                    <input  id= "hash" type="text" name="newHash" placeholder="Enter Hash" required
                            oninvalid="this.setCustomValidity('Enter Hash Here')"
                            oninput="this.setCustomValidity('')" ></input>
                    <br></br><br></br>

                    <div class = {"row"}>
                        <div class={"col-12 text-center"}>
                            <h2>Choose any existing hash tag</h2>
                        </div>
                    </div>
                    <div class={"row"}>
                    {hash}
                    </div>
                    <input  id= "tweet" type="text" name="username" placeholder="Enter Tweet" required
                            oninvalid="this.setCustomValidity('Enter Tweet Here')"
                            oninput="this.setCustomValidity('')" value={name} style={{display:"none"}}></input>

                    <input type="submit" value="Submit"></input>
                </form>
                </div>
        ]
    }
    else
    {
        buttonSwitch=[<div class = {"col-12 text-center"}>
                            <p><a href={"/login"}>Please Log in to tweet</a></p>
                        </div>
                    ]
    }
    //console.log(this.props.types);
    return (
      <html>
        <head />
        <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
                <link rel={"stylesheet"} href={"style/style.css"}></link>
        <body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/login">Login</a>
      <a class="nav-item nav-link" href="/register">Register</a>
      <a class="nav-item nav-link" href="/user">Users</a>
       <a class="nav-item nav-link" href="/tweet">Tweeds</a>
        <a class="nav-item nav-link" href="/hash">Hash</a>
        <a class="nav-item nav-link" href="/favorite">Favorites</a>
    </div>
  </div>
</nav>


          <div class={"container mt-3 mb-5 tweetBox"}>
                        <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Welcome {name} to Tweeder</h1>
            </div>
            </div>

            {tweet}


                       <div class={"row mt-5"}>
                {buttonSwitch}
            </div>
          </div>
          <script src="script/home.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;