import { SpeakeasyBase } from "../../../internal/utils";
import { Meta28 } from "./meta28";
export declare class QueryRestApiGet extends SpeakeasyBase {
    changedOn?: Date;
    clientId: string;
    database: Meta28;
    endResultBackendTime?: number;
    endTime?: number;
    errorMessage?: string;
    executedSql?: string;
    id?: number;
    limit?: number;
    progress?: number;
    resultsKey?: string;
    rows?: number;
    schema?: string;
    selectAsCta?: boolean;
    selectAsCtaUsed?: boolean;
    selectSql?: string;
    sql?: string;
    sqlEditorId?: string;
    startRunningTime?: number;
    startTime?: number;
    status?: string;
    tabName?: string;
    tmpSchemaName?: string;
    tmpTableName?: string;
    trackingUrl?: string;
}
