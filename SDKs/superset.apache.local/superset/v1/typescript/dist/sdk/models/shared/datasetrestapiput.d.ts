import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetColumnsPut } from "./datasetcolumnsput";
import { DatasetMetricsPut } from "./datasetmetricsput";
export declare class DatasetRestApiPut extends SpeakeasyBase {
    cacheTimeout?: number;
    columns?: DatasetColumnsPut[];
    databaseId?: number;
    defaultEndpoint?: string;
    description?: string;
    extra?: string;
    fetchValuesPredicate?: string;
    filterSelectEnabled?: boolean;
    isSqllabView?: boolean;
    mainDttmCol?: string;
    metrics?: DatasetMetricsPut[];
    offset?: number;
    owners?: number[];
    schema?: string;
    sql?: string;
    tableName?: string;
    templateParams?: string;
}
