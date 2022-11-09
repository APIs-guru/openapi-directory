import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatchAlliance } from "./matchalliance";
import { MatchAlliance } from "./matchalliance";


// MatchAlliances
/** 
 * A list of alliances, the teams on the alliances, and their score.
**/
export class MatchAlliances extends SpeakeasyBase {
  @Metadata({ data: "json, name=blue" })
  blue?: MatchAlliance;

  @Metadata({ data: "json, name=red" })
  red?: MatchAlliance;
}

export enum MatchCompLevelEnum {
    Qm = "qm"
,    Ef = "ef"
,    Qf = "qf"
,    Sf = "sf"
,    F = "f"
}


export class MatchVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

export enum MatchWinningAllianceEnum {
    Red = "red"
,    Blue = "blue"
,    Unknown = ""
}


export class Match extends SpeakeasyBase {
  @Metadata({ data: "json, name=actual_time" })
  actualTime?: number;

  @Metadata({ data: "json, name=alliances" })
  alliances?: MatchAlliances;

  @Metadata({ data: "json, name=comp_level" })
  compLevel: MatchCompLevelEnum;

  @Metadata({ data: "json, name=event_key" })
  eventKey: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=match_number" })
  matchNumber: number;

  @Metadata({ data: "json, name=post_result_time" })
  postResultTime?: number;

  @Metadata({ data: "json, name=predicted_time" })
  predictedTime?: number;

  @Metadata({ data: "json, name=score_breakdown" })
  scoreBreakdown?: Map<string, any>;

  @Metadata({ data: "json, name=set_number" })
  setNumber: number;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=videos", elemType: shared.MatchVideos })
  videos?: MatchVideos[];

  @Metadata({ data: "json, name=winning_alliance" })
  winningAlliance?: MatchWinningAllianceEnum;
}
