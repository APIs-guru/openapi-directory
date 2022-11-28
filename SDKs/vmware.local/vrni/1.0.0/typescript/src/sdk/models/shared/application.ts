import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";



export class Application extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=create_time" })
  createTime?: number;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=last_modified_by" })
  lastModifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified_time" })
  lastModifiedTime?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
