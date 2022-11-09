import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The additional direct deposit model
**/
export declare class DirectDepositAdditionalDirectDeposit extends SpeakeasyBase {
    accountNumber?: string;
    accountType?: string;
    amount?: number;
    amountType?: string;
    blockSpecial?: boolean;
    isSkipPreNote?: boolean;
    nameOnAccount?: string;
    preNoteDate?: string;
    routingNumber?: string;
}
/**
 * The main Direct Deposit account.
**/
export declare class DirectDepositMainDirectDeposit extends SpeakeasyBase {
    accountNumber?: string;
    accountType?: string;
    blockSpecial?: boolean;
    isSkipPreNote?: boolean;
    nameOnAccount?: string;
    preNoteDate?: string;
    routingNumber?: string;
}
/**
 * The Direct Deposit model
**/
export declare class DirectDeposit extends SpeakeasyBase {
    additionalDirectDeposit?: DirectDepositAdditionalDirectDeposit[];
    mainDirectDeposit?: DirectDepositMainDirectDeposit;
}
