import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchAlliance } from "./matchalliance";



// MatchSimpleAlliances
/** 
 * A list of alliances, the teams on the alliances, and their score.
**/
export class MatchSimpleAlliances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blue" })
  blue?: MatchAlliance;

  @SpeakeasyMetadata({ data: "json, name=red" })
  red?: MatchAlliance;
}

export enum MatchSimpleCompLevelEnum {
    Qm = "qm",
    Ef = "ef",
    Qf = "qf",
    Sf = "sf",
    F = "f"
}

export enum MatchSimpleWinningAllianceEnum {
    Red = "red",
    Blue = "blue",
    Unknown = ""
}


export class MatchSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actual_time" })
  actualTime?: number;

  @SpeakeasyMetadata({ data: "json, name=alliances" })
  alliances?: MatchSimpleAlliances;

  @SpeakeasyMetadata({ data: "json, name=comp_level" })
  compLevel: MatchSimpleCompLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=event_key" })
  eventKey: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=match_number" })
  matchNumber: number;

  @SpeakeasyMetadata({ data: "json, name=predicted_time" })
  predictedTime?: number;

  @SpeakeasyMetadata({ data: "json, name=set_number" })
  setNumber: number;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=winning_alliance" })
  winningAlliance?: MatchSimpleWinningAllianceEnum;
}
