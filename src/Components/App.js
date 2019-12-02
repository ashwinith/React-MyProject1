import React from "react";
import EmployeeDetails from "./employeeDetails";
import Faker from "faker";
import Button from "./buttons";

const App = () => {

    let style = {
        padding: "60px 0px 60px"
  }
 return(

<div className="container" style={style}>

    <div className="row">
            <Button>
            <EmployeeDetails name="David Jenkins" profile="Data Scientist" imgUrl={Faker.image.avatar()}/>
            </Button>
            <Button>
            <EmployeeDetails name="Jessica Williams" profile="Marketing Coordinator" imgUrl={Faker.image.avatar()}/>
            </Button>
            <Button>
            <EmployeeDetails name="Alex Smith" profile="Web Designer" imgUrl={Faker.image.avatar()}/>
            </Button>
    </div>
                     
    <div className="row">
    <Button>
        <EmployeeDetails name="Martin Thomas" profile="System Engineer" imgUrl={Faker.image.avatar()}/>
        </Button>
        <Button>
        <EmployeeDetails name="Paul Carter" profile="Business Analyst" imgUrl={Faker.image.avatar()}/>
        </Button>
        <Button>
        <EmployeeDetails name="Carol Williams" profile="Delivery Manager" imgUrl={Faker.image.avatar()}/>
        </Button>
    </div>
        

</div>

 );

}

export default App;
