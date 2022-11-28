import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayorAmlTransactionV3 extends SpeakeasyBase {
    credit?: number;
    creditCurrency?: string;
    dateFundingRequested?: string;
    debit?: number;
    debitCurrency?: string;
    fundingType?: string;
    fxApplied?: number;
    payeeType?: string;
    paymentAmount?: number;
    paymentCurrency?: string;
    paymentMemo?: string;
    paymentRails?: string;
    paymentStatus?: string;
    payorPaymentId?: string;
    rejectReason?: string;
    remoteId?: string;
    reportTransactionType?: string;
    returnCode?: string;
    returnDescription?: string;
    returnFee?: string;
    returnFeeCurrency?: string;
    returnFeeDescription?: string;
    sourceAccount?: string;
    transactionDate?: Date;
    transactionTime?: string;
}
