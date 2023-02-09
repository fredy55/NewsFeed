import TheGuardian from "./NewSource/TheGuardian";
import NyTimes from "./NewSource/NyTimes";
import NewApi from "./NewSource/NewApi";
import Search from "../components/dataquery/Search";

const NewsList = (props) => {
    
    return (
        <>
          <Search />
          <TheGuardian />
          <NewApi />
          <NyTimes />
        </>
    );
}

export default NewsList;