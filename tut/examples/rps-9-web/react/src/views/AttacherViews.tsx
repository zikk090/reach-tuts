import React from "react";
import PlayerViews from "./PlayerViews";
import {useGlobalContext} from "../context"

const exports = { ...PlayerViews };

const Wrapper = (props:any) => {
  const { content } = props;
  return (
    <div className="Attacher">
      <h2>Attacher (Bob)</h2>
      {content}
    </div>
  );
};

const Attach = (props:any) => {
  const {setState, state} = useGlobalContext()
  const { parent } = props;
  const { ctcInfoStr } = state || {};
  return (
    <div>
      Please paste the contract info to attach to:
      <br />
      <textarea
        spellCheck="false"
        className="ContractInfo"
        onChange={(e) => setState({ ...state,ctcInfoStr: e.currentTarget.value })}
        placeholder="{}"
      />
      <br />
      <button disabled={!ctcInfoStr} onClick={() => parent.attach(ctcInfoStr)}>
        Attach
      </button>
    </div>
  );
};

const Attaching = () => {
  return <div>Attaching, please wait...</div>;
};

const AcceptTerms = (pro ) => {
  const {state, setState} = useGlobalContext()
  const { wager, standardUnit, parent } = props;
  const { disabled } = state || {};
  return (
    <div>
      The terms of the game are:
      <br /> Wager: {wager} {standardUnit}
      <br />
      <button
        disabled={disabled}
        onClick={() => {
          setState({ disabled: true });
          parent.termsAccepted();
        }}
      >
        Accept terms and pay wager
      </button>
    </div>
  );
};

const WaitingForTurn = () => {
  return (
    <div>
      Waiting for the other player...
      <br />
      Think about which move you want to play.
    </div>
  );
};

export { Wrapper, Attach, Attaching, AcceptTerms, WaitingForTurn };
