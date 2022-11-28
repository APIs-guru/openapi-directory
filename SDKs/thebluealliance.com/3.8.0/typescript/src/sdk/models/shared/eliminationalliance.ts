import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WltRecord } from "./wltrecord";



// EliminationAllianceBackup
/** 
 * Backup team called in, may be null.
**/
export class EliminationAllianceBackup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=in" })
  in?: string;

  @SpeakeasyMetadata({ data: "json, name=out" })
  out?: string;
}


export class EliminationAllianceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_level_record" })
  currentLevelRecord?: WltRecord;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;

  @SpeakeasyMetadata({ data: "json, name=playoff_average" })
  playoffAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=record" })
  record?: WltRecord;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class EliminationAlliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup" })
  backup?: EliminationAllianceBackup;

  @SpeakeasyMetadata({ data: "json, name=declines" })
  declines?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=picks" })
  picks: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EliminationAllianceStatus;
}
