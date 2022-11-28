import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectGroupEnum } from "./objectgroupenum";
import { ObjectTypeEnum } from "./objecttypeenum";



export class Association extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileId" })
  fileId?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectGroup" })
  objectGroup?: ObjectGroupEnum;

  @SpeakeasyMetadata({ data: "json, name=ObjectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectType" })
  objectType?: ObjectTypeEnum;
}
