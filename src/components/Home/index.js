import React, {useState} from "react";
import Loading from "../Utils/Loading";
import {ResponsiveBar} from "@nivo/bar";
import "./style.scss";
import MyResponsiveBar from "./MyResponsiveBar";
const Home = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="container py-5">
            <header className="text-white mb-5">
                <h1 className="font-weight-bolder mb-0">따뜻함에 스위치를 ON하다,</h1>
                <h1 className="font-weight-lighter mb-0">따따온입니다.</h1>
            </header>
            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-4 mb-md-5">
                        <div className="card-body">
                            <div style={{height:400}}>
                                <MyResponsiveBar></MyResponsiveBar>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 mb-md-5">
                        <div className="p-5">
                            <header className="mb-5">
                                <h5>따따온 자수 EVENT<br/>선정 단체</h5>
                            </header>
                            <div className="mb-5">
                                1. 따따온 (65개)
                                <br/>
                                2. A 대학교 (51개)
                                <br/>
                                3. D 학원 (33개)
                                <br/>
                                <br/>
                                추가 문의
                                <br/>
                                <a href="https://instagram.com/ddaddaon_project" target="_blank">Instagram</a>
                                <br/>
                                <a href="https://facebook.com/ddaddaon" target="_blank">Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;