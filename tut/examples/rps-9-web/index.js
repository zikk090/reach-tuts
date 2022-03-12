import React, {useEffect, useState} from "react";
import AppViews from "./views/AppViews";
import DeployerViews from "./views/DeployerViews";
import AttacherViews from "./views/AttacherViews";
import { renderDOM, renderView as RenderView } from "./views/render";
import "./index.css";
import * as backend from "./build/index.main.mjs.js.js";
import { loadStdlib } from "@reach-sh/stdlib";
const reach = loadStdlib(process.env);

const handToInt = { "Rock":0, "Paper":1, "Sciissors": 2}
const intToOutcome = ["Bob wins!", "Draw!","Alice wins!"]
const {standaredUnit} = reach
const defaults = {defaultFundAmt : "10", defaultWager: "3", standaredUnit}


const App = () =>{
    const [state, setState] =useState({view:"ConnectAccount", ...defaults})

    const fundAccount = async (fundAmount) => {
      await reach.fundFromFaucet(state.acc, reach.parseCurrency(fundAccount));
      setState({...state, view: "DeployerOrAttacher"})
    };
    const skipFundAccount = async ()=>{
        setState({...state, view: "DeployerOrAttacher"})
    }
    useEffect(()=>{
        (async()=>{
            const acc = await reach.getDefaultAccount()
            const balAtomic = await reach.balanceOf(acc)
            const bal = reach.formatCurrency(balAtomic, 4)
            setState({ ...state, acc, bal });
            if(await reach.canFundFromFaucet()){
                setState({...state, view:"FundAccount"})
            }
            else {
                setState({...state, view:"DeployerOrAttacher"})
            }
        })()
    },[])

            return <RenderView {...AppViews} />;
}

