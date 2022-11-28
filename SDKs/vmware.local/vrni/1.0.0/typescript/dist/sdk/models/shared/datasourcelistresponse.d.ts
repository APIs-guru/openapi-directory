import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceEntityId } from "./datasourceentityid";
export declare class DataSourceListResponse extends SpeakeasyBase {
    results?: DataSourceEntityId[];
    totalCount?: number;
}
