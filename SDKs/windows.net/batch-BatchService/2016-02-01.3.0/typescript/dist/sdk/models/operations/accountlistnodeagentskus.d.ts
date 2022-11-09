import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AccountListNodeAgentSkusQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    apiVersion: string;
    maxresults?: number;
    timeout?: number;
}
export declare class AccountListNodeAgentSkusHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class AccountListNodeAgentSkusRequest extends SpeakeasyBase {
    queryParams: AccountListNodeAgentSkusQueryParams;
    headers: AccountListNodeAgentSkusHeaders;
}
export declare class AccountListNodeAgentSkusResponse extends SpeakeasyBase {
    accountListNodeAgentSkusResult?: any;
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
