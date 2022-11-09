import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WltRecord } from "./wltrecord";
import { WltRecord } from "./wltrecord";


// EliminationAllianceBackup
/** 
 * Backup team called in, may be null.
**/
export class EliminationAllianceBackup extends SpeakeasyBase {
  @Metadata({ data: "json, name=in" })
  in?: string;

  @Metadata({ data: "json, name=out" })
  out?: string;
}


export class EliminationAllianceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_level_record" })
  currentLevelRecord?: WltRecord;

  @Metadata({ data: "json, name=level" })
  level?: string;

  @Metadata({ data: "json, name=playoff_average" })
  playoffAverage?: number;

  @Metadata({ data: "json, name=record" })
  record?: WltRecord;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class EliminationAlliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup" })
  backup?: EliminationAllianceBackup;

  @Metadata({ data: "json, name=declines" })
  declines?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=picks" })
  picks: string[];

  @Metadata({ data: "json, name=status" })
  status?: EliminationAllianceStatus;
}
