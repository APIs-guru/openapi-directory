import { SpeakeasyBase } from "../../../internal/utils";
import { Datasource } from "./datasource";
export declare class CacheInvalidationRequestSchema extends SpeakeasyBase {
    datasourceUids?: string[];
    datasources?: Datasource[];
}
