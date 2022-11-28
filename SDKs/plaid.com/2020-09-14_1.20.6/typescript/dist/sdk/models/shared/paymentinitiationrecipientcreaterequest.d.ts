import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationRecipientCreateRequest defines the request schema for `/payment_initiation/recipient/create`
**/
export declare class PaymentInitiationRecipientCreateRequest extends SpeakeasyBase {
    address?: Map<string, any>;
    bacs?: Map<string, any>;
    clientId?: string;
    iban?: string;
    name: string;
    secret?: string;
}
