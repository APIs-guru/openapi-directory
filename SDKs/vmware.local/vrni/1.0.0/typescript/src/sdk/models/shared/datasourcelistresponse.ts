import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceEntityId } from "./datasourceentityid";


export class DataSourceListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.DataSourceEntityId })
  results?: DataSourceEntityId[];

  @Metadata({ data: "json, name=total_count" })
  totalCount?: number;
}
