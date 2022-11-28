import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to be used with the request. If specified, `options` must not be `null`.
**/
export declare class TransactionsGetRequestOptions extends SpeakeasyBase {
    accountIds?: string[];
    count?: number;
    includeOriginalDescription?: boolean;
    offset?: number;
}
