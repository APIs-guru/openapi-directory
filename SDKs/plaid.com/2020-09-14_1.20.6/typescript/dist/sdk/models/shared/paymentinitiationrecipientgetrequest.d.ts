import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationRecipientGetRequest defines the request schema for `/payment_initiation/recipient/get`
**/
export declare class PaymentInitiationRecipientGetRequest extends SpeakeasyBase {
    clientId?: string;
    recipientId: string;
    secret?: string;
}
