import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class BaseL2Network extends SpeakeasyBase {
    entityId?: string;
    entityType?: EntityTypeEnum;
    gateways?: string[];
    name?: string;
    networkAddresses?: string[];
}
