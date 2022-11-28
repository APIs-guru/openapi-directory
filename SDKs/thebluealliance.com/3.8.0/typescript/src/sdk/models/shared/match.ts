import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchAlliance } from "./matchalliance";



// MatchAlliances
/** 
 * A list of alliances, the teams on the alliances, and their score.
**/
export class MatchAlliances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blue" })
  blue?: MatchAlliance;

  @SpeakeasyMetadata({ data: "json, name=red" })
  red?: MatchAlliance;
}

export enum MatchCompLevelEnum {
    Qm = "qm",
    Ef = "ef",
    Qf = "qf",
    Sf = "sf",
    F = "f"
}


export class MatchVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum MatchWinningAllianceEnum {
    Red = "red",
    Blue = "blue",
    Unknown = ""
}


export class Match extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actual_time" })
  actualTime?: number;

  @SpeakeasyMetadata({ data: "json, name=alliances" })
  alliances?: MatchAlliances;

  @SpeakeasyMetadata({ data: "json, name=comp_level" })
  compLevel: MatchCompLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=event_key" })
  eventKey: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=match_number" })
  matchNumber: number;

  @SpeakeasyMetadata({ data: "json, name=post_result_time" })
  postResultTime?: number;

  @SpeakeasyMetadata({ data: "json, name=predicted_time" })
  predictedTime?: number;

  @SpeakeasyMetadata({ data: "json, name=score_breakdown" })
  scoreBreakdown?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=set_number" })
  setNumber: number;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=videos", elemType: MatchVideos })
  videos?: MatchVideos[];

  @SpeakeasyMetadata({ data: "json, name=winning_alliance" })
  winningAlliance?: MatchWinningAllianceEnum;
}
