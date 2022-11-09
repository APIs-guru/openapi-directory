import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";


export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=members", elemType: shared.Reference })
  members?: Reference[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
