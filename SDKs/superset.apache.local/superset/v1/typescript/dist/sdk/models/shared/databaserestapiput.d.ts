import { SpeakeasyBase } from "../../../internal/utils";
export declare class DatabaseRestApiPut extends SpeakeasyBase {
    allowCsvUpload?: boolean;
    allowCtas?: boolean;
    allowCvas?: boolean;
    allowDml?: boolean;
    allowMultiSchemaMetadataFetch?: boolean;
    allowRunAsync?: boolean;
    cacheTimeout?: number;
    configurationMethod?: any;
    databaseName?: string;
    encryptedExtra?: string;
    engine?: string;
    exposeInSqllab?: boolean;
    extra?: string;
    forceCtasSchema?: string;
    impersonateUser?: boolean;
    parameters?: Map<string, any>;
    serverCert?: string;
    sqlalchemyUri?: string;
}
