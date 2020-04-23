var React = require("react");

class allUsers extends React.Component {
  render() {
    console.log(this.props);
    const name = this.props.name;
    const follow=this.props.users.map(user=>
        {
            //console.log(tweet);

            return <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <p>{user.name} </p>
            <br></br><br></br>
            <button type="submit" name="follower_id" value={user.id}>Follow</button>
            <br></br><br></br>
            </div>
            </div>


        });
    //console.log(this.props.types);
    return (
      <html>
        <head />
        <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
        <body>




          <div class={"container mt-3"}>
                        <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Welcome {name} to Tweeder</h1>
            </div>
            </div>
            <div class = {"row"}>
                <div class = {"col-12"}>
                    <form method="POST" action="/follow"  style={{textAlign: "Center"}}>
                            {follow}
                    </form>
                </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = allUsers;