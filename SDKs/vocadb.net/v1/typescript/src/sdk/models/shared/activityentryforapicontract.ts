import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchivedObjectVersionForApiContract } from "./archivedobjectversionforapicontract";
import { UserForApiContract } from "./userforapicontract";
import { EntryForApiContract } from "./entryforapicontract";

export enum ActivityEntryForApiContractEditEventEnum {
    Created = "Created"
,    Updated = "Updated"
,    Deleted = "Deleted"
,    Restored = "Restored"
}


export class ActivityEntryForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=archivedVersion" })
  archivedVersion?: ArchivedObjectVersionForApiContract;

  @Metadata({ data: "json, name=author" })
  author?: UserForApiContract;

  @Metadata({ data: "json, name=createDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=editEvent" })
  editEvent?: ActivityEntryForApiContractEditEventEnum;

  @Metadata({ data: "json, name=entry" })
  entry?: EntryForApiContract;
}
