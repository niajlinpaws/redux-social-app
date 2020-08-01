import React from "react";

let MyPosts = props => {
  console.log("MyPosts called");
  return (
    <div className="col-sm-7 bg-secondary">
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default text-left">
            <div className="panel-body">
              <p>Status: Feeling Blue</p>
              <button type="button" className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-thumbs-up" /> Like
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3">
          <div className="well">
            <p>John</p>
            <img
              src="bird.jpg"
              className="img-circle"
              height="55"
              width="55"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="well">
            <p>
              Just Forgot that I had to mention something about someone to
              someone about how I forgot something, but now I forgot it. Ahh,
              forget it! Or wait. I remember.... no I don't.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="well">
            <p>Bo</p>
            <img
              src="bandmember.jpg"
              className="img-circle"
              height="55"
              width="55"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="well">
            <p>
              Just Forgot that I had to mention something about someone to
              someone about how I forgot something, but now I forgot it. Ahh,
              forget it! Or wait. I remember.... no I don't.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="well">
            <p>Jane</p>
            <img
              src="bandmember.jpg"
              className="img-circle"
              height="55"
              width="55"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="well">
            <p>
              Just Forgot that I had to mention something about someone to
              someone about how I forgot something, but now I forgot it. Ahh,
              forget it! Or wait. I remember.... no I don't.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="well">
            <p>Anja</p>
            <img
              src="bird.jpg"
              className="img-circle"
              height="55"
              width="55"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="well">
            <p>
              Just Forgot that I had to mention something about someone to
              someone about how I forgot something, but now I forgot it. Ahh,
              forget it! Or wait. I remember.... no I don't.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
