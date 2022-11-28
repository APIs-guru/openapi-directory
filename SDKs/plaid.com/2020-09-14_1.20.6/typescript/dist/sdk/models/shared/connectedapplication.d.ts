import { SpeakeasyBase } from "../../../internal/utils";
import { RequestedScopes } from "./requestedscopes";
export declare enum ConnectedApplicationProductDataTypesEnum {
    AccountBalance = "ACCOUNT_BALANCE",
    AccountUserInfo = "ACCOUNT_USER_INFO",
    AccountTransactions = "ACCOUNT_TRANSACTIONS"
}
/**
 * Describes the connected application for a particular end user.
**/
export declare class ConnectedApplication extends SpeakeasyBase {
    applicationId: string;
    applicationUrl: string;
    createdAt: string;
    logo: string;
    logoUrl: string;
    name: string;
    productDataTypes: ConnectedApplicationProductDataTypesEnum[];
    reasonForAccess: string;
    requestedScopes?: RequestedScopes;
    scopes?: Map<string, any>;
}
