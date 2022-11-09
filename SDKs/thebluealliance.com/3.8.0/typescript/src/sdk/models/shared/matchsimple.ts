import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatchAlliance } from "./matchalliance";
import { MatchAlliance } from "./matchalliance";


// MatchSimpleAlliances
/** 
 * A list of alliances, the teams on the alliances, and their score.
**/
export class MatchSimpleAlliances extends SpeakeasyBase {
  @Metadata({ data: "json, name=blue" })
  blue?: MatchAlliance;

  @Metadata({ data: "json, name=red" })
  red?: MatchAlliance;
}

export enum MatchSimpleCompLevelEnum {
    Qm = "qm"
,    Ef = "ef"
,    Qf = "qf"
,    Sf = "sf"
,    F = "f"
}

export enum MatchSimpleWinningAllianceEnum {
    Red = "red"
,    Blue = "blue"
,    Unknown = ""
}


export class MatchSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=actual_time" })
  actualTime?: number;

  @Metadata({ data: "json, name=alliances" })
  alliances?: MatchSimpleAlliances;

  @Metadata({ data: "json, name=comp_level" })
  compLevel: MatchSimpleCompLevelEnum;

  @Metadata({ data: "json, name=event_key" })
  eventKey: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=match_number" })
  matchNumber: number;

  @Metadata({ data: "json, name=predicted_time" })
  predictedTime?: number;

  @Metadata({ data: "json, name=set_number" })
  setNumber: number;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=winning_alliance" })
  winningAlliance?: MatchSimpleWinningAllianceEnum;
}
