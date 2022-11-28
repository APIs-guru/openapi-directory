import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class EntityIdWithTime extends SpeakeasyBase {
    entityId?: string;
    entityType?: EntityTypeEnum;
    time?: number;
}
