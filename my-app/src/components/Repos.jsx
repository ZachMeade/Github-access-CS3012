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
         <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#allrepos" role="tab" aria-controls="home">All repos</a>
         {elements.map((value,index) => {
         return(<a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href={"#"+value} role="tab" aria-controls="home">{value}</a>)
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
         layout={ {width: 700, height: 400, title: 'Number of Stars per Repository'} }
         /></div>

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
                     <div class="col-md-3 text-left ">Size:</div>
                     <div class="col-md-7 text-left ">{String((Number(props.repos[index].size) * .001).toFixed(3))+" Mb"}</div>
                  </div>
               </div>
               <div class="col-md-3 text-left">
                  <div class="row justify-content-left text-dark">
                     <div class="col-md-6 text-left">Forks:</div>
                     {props.repos[index].forks ?
                     <div class="col-md-6 text-left ">{props.repos[index].forks}</div>
                     :
                     <div class="col-md-6 text-left ">0</div>
                     }
                  </div>
               </div>

                  <div class="col-md-4 text-left">
                  <div class="row justify-content-left text-dark">
                  <div class="col-md-4 text-right">Created:</div>
                  {props.repos[index].created_at ?
         <div class="col-md-8 text-left border-right">{<Moment from={new Date()}>{props.repos[index].created_at}</Moment>}</div>
      : null }
                  </div>
               </div>
            </div>
            <div class="row justify-content-left text-dark">
               <div class="col-md-5 text-left">
                  <div class="row justify-content-left text-dark">
                     <div class="col-md-3 text-left ">Language:</div>
                     <div class="col-md-7 text-left ">{props.repos[index].language}</div>
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
        layout={ {width: 700, height: 350, title: 'A Fancy Plot'} }
      />
               </div>
               <div class="col-md-3 text-left">
                  <div class="row justify-content-left text-dark">
                     <div class="col-md-6 text-left">Watchers: </div>
                     {props.repos[index].watchers ?
                     <div class="col-md-6 text-left ">{props.repos[index].watchers}</div>
                     :
                     <div class="col-md-6 text-left ">0</div>
                     }
                  </div>
               </div>

                  <div class="col-md-4 text-left">
                  <div class="row justify-content-left text-dark">
                  <div class="col-md-4 text-right">Updated:</div>
                  {props.repos[index].created_at ?
         <div class="col-md-8 text-left border-right">{<Moment from={new Date()}>{props.repos[index].updated_at}</Moment>}
         </div>


      : null }


                  </div>
               </div>
            </div>
            <b></b>
         </div>

         )
         })}

      </div>
      <div>


          {props.infoclean.login ?  <div>{ <img src={"http://ghchart.rshah.org/"+props.infoclean.login} alt='' />
          }<br/></div> : null }
      </div>
   </div>
</div>
)
}else{return null;}
};
export default Repos;
