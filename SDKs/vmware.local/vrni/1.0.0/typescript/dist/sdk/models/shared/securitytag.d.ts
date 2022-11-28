import { SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class SecurityTag extends SpeakeasyBase {
    description?: string;
    directSecurityGroups?: Reference[];
    entityId?: string;
    entityType?: EntityTypeEnum;
    name?: string;
    nsxManager?: Reference;
    securityGroups?: Reference[];
    vendorId?: string;
}
