import React from "react";
import {GridLoader} from "react-spinners";

const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: '100%'}}>
            <GridLoader
                size={10}
                margin={2}
                color={"#352256"}
                loading={true}
            />
        </div>
    );
};

export default Loading;