import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The rti transaction bases' employer core
**/
export declare class RtiTransactionBaseRtiTransactionBaseEmployerCore extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare enum RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum {
    New = "New",
    RequestGenerated = "RequestGenerated",
    CompletedWithError = "CompletedWithError",
    CompletedWithSuccess = "CompletedWithSuccess",
    TimeOut = "TimeOut"
}
export declare class RtiTransactionBaseRtiTransactionBase extends SpeakeasyBase {
    employerCore?: RtiTransactionBaseRtiTransactionBaseEmployerCore;
    requestData?: string;
    responseData?: string;
    rtiType?: string;
    taxYear?: number;
    timestamp?: Date;
    transactionStatus?: RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum;
    transmissionDate?: Date;
}
export declare class RtiTransactionBase extends SpeakeasyBase {
    rtiTransactionBase?: RtiTransactionBaseRtiTransactionBase;
}
