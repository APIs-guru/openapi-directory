import { SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
import { GroupMembershipCriteria } from "./groupmembershipcriteria";
export declare class Tier extends SpeakeasyBase {
    application?: Reference;
    entityId?: string;
    entityType?: EntityTypeEnum;
    groupMembershipCriteria?: GroupMembershipCriteria[];
    name?: string;
}
