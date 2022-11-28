import { SpeakeasyBase } from "../../../internal/utils";
import { Meta18 } from "./meta18";
export declare class DatabaseRestApiGetList extends SpeakeasyBase {
    allowCsvUpload?: boolean;
    allowCtas?: boolean;
    allowCvas?: boolean;
    allowDml?: boolean;
    allowMultiSchemaMetadataFetch?: boolean;
    allowRunAsync?: boolean;
    allowsCostEstimate?: any;
    allowsSubquery?: any;
    allowsVirtualTableExplore?: any;
    backend?: any;
    changedOn?: Date;
    changedOnDeltaHumanized?: any;
    createdBy?: Meta18;
    databaseName: string;
    exploreDatabaseId?: any;
    exposeInSqllab?: boolean;
    extra?: string;
    forceCtasSchema?: string;
    id?: number;
}
