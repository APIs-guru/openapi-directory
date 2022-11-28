import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvoiceResponseClarificationClarificationCodeEnum {
    Ref = "REF",
    Leg = "LEG",
    Rec = "REC",
    Qua = "QUA",
    Del = "DEL",
    Pri = "PRI",
    Qty = "QTY",
    Itm = "ITM",
    Pay = "PAY",
    Unr = "UNR",
    Fin = "FIN",
    Oth = "OTH",
    Pin = "PIN",
    Nin = "NIN",
    Cnf = "CNF",
    Cnp = "CNP",
    Cna = "CNA"
}
export declare enum InvoiceResponseClarificationClarificationCodeTypeEnum {
    OpStatusReason = "OPStatusReason",
    OpStatusAction = "OPStatusAction"
}
/**
 * A clarification for why a received invoice was rejected (RE) or under query (UQ) and what action to take.
**/
export declare class InvoiceResponseClarification extends SpeakeasyBase {
    clarification?: string;
    clarificationCode: InvoiceResponseClarificationClarificationCodeEnum;
    clarificationCodeType: InvoiceResponseClarificationClarificationCodeTypeEnum;
}
