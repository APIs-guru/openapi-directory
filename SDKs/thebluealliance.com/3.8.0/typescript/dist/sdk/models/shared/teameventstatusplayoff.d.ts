import { SpeakeasyBase } from "../../../internal/utils";
import { WltRecord } from "./wltrecord";
export declare enum TeamEventStatusPlayoffLevelEnum {
    Qm = "qm",
    Ef = "ef",
    Qf = "qf",
    Sf = "sf",
    F = "f"
}
export declare enum TeamEventStatusPlayoffStatusEnum {
    Won = "won",
    Eliminated = "eliminated",
    Playing = "playing"
}
/**
 * Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun.
**/
export declare class TeamEventStatusPlayoff extends SpeakeasyBase {
    currentLevelRecord?: WltRecord;
    level?: TeamEventStatusPlayoffLevelEnum;
    playoffAverage?: number;
    record?: WltRecord;
    status?: TeamEventStatusPlayoffStatusEnum;
}
