import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceTypeEnum } from "./datasourcetypeenum";



export class DataSourceEntityId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: DataSourceTypeEnum;
}
