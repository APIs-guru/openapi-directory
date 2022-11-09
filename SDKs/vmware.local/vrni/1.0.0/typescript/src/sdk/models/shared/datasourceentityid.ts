import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceTypeEnum } from "./datasourcetypeenum";


export class DataSourceEntityId extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: DataSourceTypeEnum;
}
