import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * ProcessorStripeBankAccountTokenCreateRequest defines the request schema for `/processor/stripe/bank_account/create`
**/
export declare class ProcessorStripeBankAccountTokenCreateRequest extends SpeakeasyBase {
    accessToken: string;
    accountId: string;
    clientId?: string;
    secret?: string;
}
