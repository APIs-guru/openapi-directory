import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class EntityName extends SpeakeasyBase {
    entityId?: string;
    entityType?: EntityTypeEnum;
    name?: string;
    time?: number;
}
