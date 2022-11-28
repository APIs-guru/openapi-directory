import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class BaseEntity extends SpeakeasyBase {
    entityId?: string;
    entityType?: EntityTypeEnum;
    name?: string;
}
