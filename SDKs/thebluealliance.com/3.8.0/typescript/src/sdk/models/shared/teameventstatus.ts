import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TeamEventStatusAlliance } from "./teameventstatusalliance";
import { TeamEventStatusPlayoff } from "./teameventstatusplayoff";
import { TeamEventStatusRank } from "./teameventstatusrank";


export class TeamEventStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=alliance" })
  alliance?: TeamEventStatusAlliance;

  @Metadata({ data: "json, name=alliance_status_str" })
  allianceStatusStr?: string;

  @Metadata({ data: "json, name=last_match_key" })
  lastMatchKey?: string;

  @Metadata({ data: "json, name=next_match_key" })
  nextMatchKey?: string;

  @Metadata({ data: "json, name=overall_status_str" })
  overallStatusStr?: string;

  @Metadata({ data: "json, name=playoff" })
  playoff?: TeamEventStatusPlayoff;

  @Metadata({ data: "json, name=playoff_status_str" })
  playoffStatusStr?: string;

  @Metadata({ data: "json, name=qual" })
  qual?: TeamEventStatusRank;
}
