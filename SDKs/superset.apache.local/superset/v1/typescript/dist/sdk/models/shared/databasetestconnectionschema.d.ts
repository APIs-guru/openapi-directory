import { SpeakeasyBase } from "../../../internal/utils";
export declare class DatabaseTestConnectionSchema extends SpeakeasyBase {
    configurationMethod?: any;
    databaseName?: string;
    encryptedExtra?: string;
    engine?: string;
    extra?: string;
    impersonateUser?: boolean;
    parameters?: Map<string, any>;
    serverCert?: string;
    sqlalchemyUri?: string;
}
