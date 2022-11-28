import { SpeakeasyBase } from "../../../internal/utils";
import { Meta27 } from "./meta27";
import { Meta26 } from "./meta26";
export declare class QueryRestApiGetList extends SpeakeasyBase {
    changedOn?: Date;
    database: Meta27;
    endTime?: number;
    executedSql?: string;
    id?: number;
    rows?: number;
    schema?: string;
    sql?: string;
    sqlTables?: any;
    startTime?: number;
    status?: string;
    tabName?: string;
    tmpTableName?: string;
    trackingUrl?: string;
    user?: Meta26;
}
