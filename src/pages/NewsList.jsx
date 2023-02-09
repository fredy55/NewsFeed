import { Component } from "react";
import TheGuardian from "./NewSource/TheGuardian";
import NyTimes from "./NewSource/NyTimes";
import NewApi from "./NewSource/NewApi";

export default class NewsList extends Component {
    state = {}
 
    componentDidMount(){
    }

    render() {
        
        return (
            <>
              <TheGuardian />
              <NewApi />
              <NyTimes />
            </>
        );
    }
}