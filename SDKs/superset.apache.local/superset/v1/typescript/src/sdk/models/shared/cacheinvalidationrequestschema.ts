import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Datasource } from "./datasource";


export class CacheInvalidationRequestSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasource_uids" })
  datasourceUids?: string[];

  @Metadata({ data: "json, name=datasources", elemType: shared.Datasource })
  datasources?: Datasource[];
}
