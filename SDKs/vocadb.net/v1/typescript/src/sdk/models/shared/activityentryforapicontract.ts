import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchivedObjectVersionForApiContract } from "./archivedobjectversionforapicontract";
import { UserForApiContract } from "./userforapicontract";
import { EntryForApiContract } from "./entryforapicontract";


export enum ActivityEntryForApiContractEditEventEnum {
    Created = "Created",
    Updated = "Updated",
    Deleted = "Deleted",
    Restored = "Restored"
}


export class ActivityEntryForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archivedVersion" })
  archivedVersion?: ArchivedObjectVersionForApiContract;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: UserForApiContract;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=editEvent" })
  editEvent?: ActivityEntryForApiContractEditEventEnum;

  @SpeakeasyMetadata({ data: "json, name=entry" })
  entry?: EntryForApiContract;
}
