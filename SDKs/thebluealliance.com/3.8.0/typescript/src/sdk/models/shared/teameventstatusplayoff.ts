import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WltRecord } from "./wltrecord";


export enum TeamEventStatusPlayoffLevelEnum {
    Qm = "qm",
    Ef = "ef",
    Qf = "qf",
    Sf = "sf",
    F = "f"
}

export enum TeamEventStatusPlayoffStatusEnum {
    Won = "won",
    Eliminated = "eliminated",
    Playing = "playing"
}


// TeamEventStatusPlayoff
/** 
 * Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun.
**/
export class TeamEventStatusPlayoff extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_level_record" })
  currentLevelRecord?: WltRecord;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: TeamEventStatusPlayoffLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=playoff_average" })
  playoffAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=record" })
  record?: WltRecord;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TeamEventStatusPlayoffStatusEnum;
}
