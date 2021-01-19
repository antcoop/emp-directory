import React from 'react';

function Project(props) {
  return (
    <div className="col-md-6">
      <div className="card mb-3 text-end">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.src || ""} alt={props.title || ""} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title || ""}</h5>
              <p className="card-text">{props.description || ""}</p>
              <p className="card-text"><small className="text-muted">Completed August 2020</small></p>
              <a href="#repo" class="btn btn-primary mr-2">Repo Link</a>
              <a href="#live" class="btn btn-primary">Project Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;