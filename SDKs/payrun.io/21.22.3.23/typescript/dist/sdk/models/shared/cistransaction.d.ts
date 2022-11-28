import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CisTransactionCisTransactionCisMessageTypeEnum {
    Verification = "Verification",
    Return = "Return"
}
/**
 * The cis transactions' employer core
**/
export declare class CisTransactionCisTransactionEmployerCore extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare enum CisTransactionCisTransactionTransactionStatusEnum {
    New = "New",
    RequestGenerated = "RequestGenerated",
    CompletedWithError = "CompletedWithError",
    CompletedWithSuccess = "CompletedWithSuccess",
    TimeOut = "TimeOut"
}
export declare class CisTransactionCisTransaction extends SpeakeasyBase {
    cisMessageType?: CisTransactionCisTransactionCisMessageTypeEnum;
    employerCore?: CisTransactionCisTransactionEmployerCore;
    requestData?: string;
    responseData?: string;
    taxYear?: number;
    timestamp?: Date;
    transactionStatus?: CisTransactionCisTransactionTransactionStatusEnum;
    transmissionDate?: Date;
}
export declare class CisTransaction extends SpeakeasyBase {
    cisTransaction?: CisTransactionCisTransaction;
}
