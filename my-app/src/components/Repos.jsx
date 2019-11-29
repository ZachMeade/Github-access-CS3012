import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Plot from 'react-plotly.js';
const Repos = (props) => {
const elements =[];
const stars =[];const watchers =[]; const forks =[];
if(props.repos && props.infoclean){
//const repoNumber = Number(props.infoclean.public_repos);
//console.log(repoNumber);
//stores repo names in array
for(var i = 0; i < props.repos.length; i++){
elements.push(props.repos[i].name);
stars.push(props.repos[i].stargazers_count);
forks.push(props.repos[i].forks);
}
const repoSize =[];const repoNames=[];
for(var i = 0; i < props.repos.length; i++){
      repoNames.push(props.repos[i].name);
}
//stores commit json in commitFile
return (
<div class="row">
   <div class="col-3">
      <h5>Select a repo to analyse</h5>
      <div class="list-group" id="list-tab" role="tablist">
         <a class="list-group-item list-group-item-dark" id="list-home-list" data-toggle="list" href="#allrepos" role="tab" aria-controls="home">All repos</a>
         {elements.map((value,index) => {
         return(<a class="list-group-item list-group-item-dark" id="list-home-list" data-toggle="list" href={"#"+value} role="tab" aria-controls="home">{value}</a>)
         })}
      </div>
   </div>

   <div class="col-md-9 text-left">
      <div class="tab-content" id="nav-tabContent">

         <div class="tab-pane fade show" id="allrepos" role="tabpanel" aria-labelledby="list-homes-list">All Repos<br></br><Plot data={[
           {
             y: stars,
             x : repoNames,
             type: 'bar'
           }
         ]}
         layout={ {width: 700, height: 400, paper_bgcolor:'rgba(0,0,0,0)',plot_bgcolor: 'rgba(0,0,0,0)',title: 'Number of Stars per Repository'} }
         />
         <div>
             {props.infoclean.login ?  <div>{ <img src={"http://ghchart.rshah.org/"+props.infoclean.login} alt='' />
             }<br/></div> : null }
         </div>
         </div>
         {elements.map((value,index) => {
         return(
         <div class="tab-pane fade show" id={value} role="tabpanel" aria-labelledby="list-homes-list">
            <i></i>
            <div class="row justify-content-left text-dark">
               <h5>{value}<br></br><br></br></h5>
            </div>
            <div class="row justify-content-left text-dark">
               <div class="col-md-5 text-left">
                  <div class="row justify-content-left text-dark">
                  </div>
               </div>
               <div class="col-md-3 text-left">
                  <div class="row justify-content-left text-dark">
                  </div>
               </div>

                  <div class="col-md-4 text-left">
                  <div class="row justify-content-left text-dark">
                  </div>
               </div>
            </div>
            <div class="row justify-content-left text-dark">
               <div class="col-md-5 text-left">
                  <div class="row justify-content-left text-dark">
                  </div>
                  <Plot
        data={[
          {
            y: [forks[index], stars[index]],
            x: ['forks', 'stars'],
            type: 'bar',
            marker: {color: 'lightblue'},
          }
        ]}
        layout={ {width: 700, height: 350, paper_bgcolor:'rgba(0,0,0,0)',plot_bgcolor: 'rgba(0,0,0,0)', title: 'Forks vs Watchers'} }
        />
               </div>
               <div class="col-md-3 text-left">
                  <div class="row justify-content-left text-dark">
                  </div>
               </div>

                  <div class="col-md-4 text-left">
                  <div class="row justify-content-left text-dark">
                  </div>
               </div>
            </div>
            <b></b>
         </div>

         )
         })}

      </div>
   </div>
</div>
)
}else{return null;}
};
export default Repos;
