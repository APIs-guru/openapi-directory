import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityTypeEnum } from "./entitytypeenum";


export class EntityName extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=time" })
  time?: number;
}
