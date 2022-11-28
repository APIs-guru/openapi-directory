import { SpeakeasyBase } from "../../../internal/utils";
import { ArchivedObjectVersionForApiContract } from "./archivedobjectversionforapicontract";
import { UserForApiContract } from "./userforapicontract";
import { EntryForApiContract } from "./entryforapicontract";
export declare enum ActivityEntryForApiContractEditEventEnum {
    Created = "Created",
    Updated = "Updated",
    Deleted = "Deleted",
    Restored = "Restored"
}
export declare class ActivityEntryForApiContract extends SpeakeasyBase {
    archivedVersion?: ArchivedObjectVersionForApiContract;
    author?: UserForApiContract;
    createDate?: Date;
    editEvent?: ActivityEntryForApiContractEditEventEnum;
    entry?: EntryForApiContract;
}
