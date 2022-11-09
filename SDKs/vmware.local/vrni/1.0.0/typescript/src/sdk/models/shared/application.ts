import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityTypeEnum } from "./entitytypeenum";


export class Application extends SpeakeasyBase {
  @Metadata({ data: "json, name=create_time" })
  createTime?: number;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=last_modified_by" })
  lastModifiedBy?: string;

  @Metadata({ data: "json, name=last_modified_time" })
  lastModifiedTime?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
