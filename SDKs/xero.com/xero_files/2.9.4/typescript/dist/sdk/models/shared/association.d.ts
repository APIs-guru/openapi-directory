import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectGroupEnum } from "./objectgroupenum";
import { ObjectTypeEnum } from "./objecttypeenum";
export declare class Association extends SpeakeasyBase {
    fileId?: string;
    objectGroup?: ObjectGroupEnum;
    objectId?: string;
    objectType?: ObjectTypeEnum;
}
