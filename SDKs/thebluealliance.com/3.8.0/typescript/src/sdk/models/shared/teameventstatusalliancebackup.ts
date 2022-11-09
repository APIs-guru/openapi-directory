import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TeamEventStatusAllianceBackup
/** 
 * Backup status, may be null.
**/
export class TeamEventStatusAllianceBackup extends SpeakeasyBase {
  @Metadata({ data: "json, name=in" })
  in?: string;

  @Metadata({ data: "json, name=out" })
  out?: string;
}
