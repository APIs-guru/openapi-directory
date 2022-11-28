import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TeamEventStatusAlliance } from "./teameventstatusalliance";
import { TeamEventStatusPlayoff } from "./teameventstatusplayoff";
import { TeamEventStatusRank } from "./teameventstatusrank";



export class TeamEventStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alliance" })
  alliance?: TeamEventStatusAlliance;

  @SpeakeasyMetadata({ data: "json, name=alliance_status_str" })
  allianceStatusStr?: string;

  @SpeakeasyMetadata({ data: "json, name=last_match_key" })
  lastMatchKey?: string;

  @SpeakeasyMetadata({ data: "json, name=next_match_key" })
  nextMatchKey?: string;

  @SpeakeasyMetadata({ data: "json, name=overall_status_str" })
  overallStatusStr?: string;

  @SpeakeasyMetadata({ data: "json, name=playoff" })
  playoff?: TeamEventStatusPlayoff;

  @SpeakeasyMetadata({ data: "json, name=playoff_status_str" })
  playoffStatusStr?: string;

  @SpeakeasyMetadata({ data: "json, name=qual" })
  qual?: TeamEventStatusRank;
}
