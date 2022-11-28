import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceEntityId } from "./datasourceentityid";



export class DataSourceListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: DataSourceEntityId })
  results?: DataSourceEntityId[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount?: number;
}
