 class planet 
        {
          constructor(gravity, name,picture)
          {
          this.gravity = gravity;
          this.name = name;
          this.picture = picture;
          
          }
       }

 var Pluto=new planet(0.58,"Pluto",'<img src="pluto.png" >')
 var Earth=new planet(9.81,"Earth",'<img src="earth.png" >')
 var Mercury=new planet(3.7,"Mercury",'<img src="mercury.png" >')
 var Venus=new planet(8.87,"Venus",'<img src="venus.png" >')
 var Jupiter=new planet(24.92,"Jupiter",'<img src="jupiter.png" >')
 var Mars=new planet(3.71,"Mars",'<img src="mars.png" >')
 var Uranus=new planet(8.87,"Uranus",'<img src="uranus.png" >')
 var Neptune=new planet(11.15,"Neptune",'<img src="neptune.png" >')
 var  Moon=new planet(1.62,"Moon",'<img src="moon.png" >')
 var Saturn=new planet(10.44,"Saturn",'<img src="saturn.png" >')
 let  planetArray=[Pluto,Earth,Mercury,Venus,Jupiter,Mars,Uranus,Neptune,Moon,Saturn]
 var errorDivTemplate = {
                   id: "divID",
                   class: "divClass",
                   css: {"color": "black","background-color":"gray",
                         "justify-content": "center","font-size": "25px",
                         "margin": "30px","width": "500px","height": "35px",
                         "display": "flex","margin-left":"135px"
                        }
                };
         
$(document).ready(function () {
    $("#btn").on("click",function() { 
         var massMissingErrorDiv = $("<div>", errorDivTemplate);
          massMissingErrorDiv.html("Mass Input required");
        
         var planetMissingErrorDiv = $("<div>", errorDivTemplate);
             planetMissingErrorDiv.html("Planet Input required");
        
         var m=($("#weight-Input").val());
         var p=$("#select-planets").val()
        if (m.length == 0 )
        {
            console.log("Mass input Empty ")
            $(".result").hide();
            $('#parent').empty();
            $("#parent").append(massMissingErrorDiv);           
        }  
        else if (p.length == 0)
            {
                console.log("Planet Empty input")
                $(".result").hide();
                $('#parent').empty();
                $("#parent").append(planetMissingErrorDiv);
            }
        else
            {
                for (let i=0;i<planetArray.length;i++)
                {
                   if(p == planetArray[i].name)
                   {
                       //calculate weight
                       calculate=`${Math.round(m*(planetArray[i].gravity))}N`
                       t="The weight of the object on" + " " + `${planetArray[i].name}`
                       planetImage=planetArray[i].picture
                       
                       //remove previous result displayed
                       $("#image").empty();
                       $('#parent').empty();
                       $('#summaryText').empty(); 
                       $("#calaculated_Weight").empty();
                       
                       //display current result
                       $(".result").show();
                       $('#summaryText').append(t);
                       $('#image').append(planetImage);
                       $("#calaculated_Weight").append(calculate);
                       break;
                   }
                }                                                               
            }
        });  
});       

