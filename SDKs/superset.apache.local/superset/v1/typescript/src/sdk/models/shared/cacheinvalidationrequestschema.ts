import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Datasource } from "./datasource";



export class CacheInvalidationRequestSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasource_uids" })
  datasourceUids?: string[];

  @SpeakeasyMetadata({ data: "json, name=datasources", elemType: Datasource })
  datasources?: Datasource[];
}
