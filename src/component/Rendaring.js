import React from 'react';

const Rendaring = (props) => {
    const familier = props.familier

    let knnown;
    if (familier){
        knnown=<h5>Well Come My Friend</h5>
    }
    else{
       knnown = <h5>Who are you ? i dont know......</h5>
    }
    console.log(knnown)
return(   
        <div>
            <div>
                <h1>Greeting</h1>
                {knnown}   
            </div>
            <div>
                <h1>Food</h1>
                {
                    familier?<h5>We can eat food</h5>:
                    <h5>I dont eat food any stranger</h5>
                }
                
            </div>


            <div>
                <h1>Adding</h1>
                {
                    familier&&<h5>We can add in facebook</h5>
                }
                
                {/* <h5>I dont add any stranger in fb</h5> */}
            </div>
           
        </div>
);
};

export default Rendaring;