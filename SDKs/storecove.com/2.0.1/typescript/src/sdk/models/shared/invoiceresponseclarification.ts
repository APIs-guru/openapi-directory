import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InvoiceResponseClarificationClarificationCodeEnum {
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

export enum InvoiceResponseClarificationClarificationCodeTypeEnum {
    OpStatusReason = "OPStatusReason",
    OpStatusAction = "OPStatusAction"
}


// InvoiceResponseClarification
/** 
 * A clarification for why a received invoice was rejected (RE) or under query (UQ) and what action to take.
**/
export class InvoiceResponseClarification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clarification" })
  clarification?: string;

  @SpeakeasyMetadata({ data: "json, name=clarificationCode" })
  clarificationCode: InvoiceResponseClarificationClarificationCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=clarificationCodeType" })
  clarificationCodeType: InvoiceResponseClarificationClarificationCodeTypeEnum;
}
