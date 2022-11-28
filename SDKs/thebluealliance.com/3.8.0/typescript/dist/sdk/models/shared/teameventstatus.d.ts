import { SpeakeasyBase } from "../../../internal/utils";
import { TeamEventStatusAlliance } from "./teameventstatusalliance";
import { TeamEventStatusPlayoff } from "./teameventstatusplayoff";
import { TeamEventStatusRank } from "./teameventstatusrank";
export declare class TeamEventStatus extends SpeakeasyBase {
    alliance?: TeamEventStatusAlliance;
    allianceStatusStr?: string;
    lastMatchKey?: string;
    nextMatchKey?: string;
    overallStatusStr?: string;
    playoff?: TeamEventStatusPlayoff;
    playoffStatusStr?: string;
    qual?: TeamEventStatusRank;
}
