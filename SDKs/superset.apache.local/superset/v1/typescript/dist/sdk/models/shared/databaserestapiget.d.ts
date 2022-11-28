import { SpeakeasyBase } from "../../../internal/utils";
export declare class DatabaseRestApiGet extends SpeakeasyBase {
    allowCsvUpload?: boolean;
    allowCtas?: boolean;
    allowCvas?: boolean;
    allowDml?: boolean;
    allowMultiSchemaMetadataFetch?: boolean;
    allowRunAsync?: boolean;
    backend?: any;
    cacheTimeout?: number;
    configurationMethod?: string;
    databaseName: string;
    encryptedExtra?: string;
    exposeInSqllab?: boolean;
    extra?: string;
    forceCtasSchema?: string;
    id?: number;
    impersonateUser?: boolean;
    parameters?: any;
    serverCert?: string;
    sqlalchemyUri: string;
}
