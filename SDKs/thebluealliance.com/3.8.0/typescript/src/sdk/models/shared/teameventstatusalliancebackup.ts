import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TeamEventStatusAllianceBackup
/** 
 * Backup status, may be null.
**/
export class TeamEventStatusAllianceBackup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=in" })
  in?: string;

  @SpeakeasyMetadata({ data: "json, name=out" })
  out?: string;
}
