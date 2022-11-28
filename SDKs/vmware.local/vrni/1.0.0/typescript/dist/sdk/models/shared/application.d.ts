import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class Application extends SpeakeasyBase {
    createTime?: number;
    createdBy?: string;
    entityId?: string;
    entityType?: EntityTypeEnum;
    lastModifiedBy?: string;
    lastModifiedTime?: number;
    name?: string;
}
