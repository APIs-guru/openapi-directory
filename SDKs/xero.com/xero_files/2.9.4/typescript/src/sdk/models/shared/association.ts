import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectGroupEnum } from "./objectgroupenum";
import { ObjectTypeEnum } from "./objecttypeenum";


export class Association extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileId" })
  fileId?: string;

  @Metadata({ data: "json, name=ObjectGroup" })
  objectGroup?: ObjectGroupEnum;

  @Metadata({ data: "json, name=ObjectId" })
  objectId?: string;

  @Metadata({ data: "json, name=ObjectType" })
  objectType?: ObjectTypeEnum;
}
