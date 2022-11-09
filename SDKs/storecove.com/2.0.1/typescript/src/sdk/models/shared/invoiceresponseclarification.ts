import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InvoiceResponseClarificationClarificationCodeEnum {
    Ref = "REF"
,    Leg = "LEG"
,    Rec = "REC"
,    Qua = "QUA"
,    Del = "DEL"
,    Pri = "PRI"
,    Qty = "QTY"
,    Itm = "ITM"
,    Pay = "PAY"
,    Unr = "UNR"
,    Fin = "FIN"
,    Oth = "OTH"
,    Pin = "PIN"
,    Nin = "NIN"
,    Cnf = "CNF"
,    Cnp = "CNP"
,    Cna = "CNA"
}

export enum InvoiceResponseClarificationClarificationCodeTypeEnum {
    OpStatusReason = "OPStatusReason"
,    OpStatusAction = "OPStatusAction"
}


// InvoiceResponseClarification
/** 
 * A clarification for why a received invoice was rejected (RE) or under query (UQ) and what action to take.
**/
export class InvoiceResponseClarification extends SpeakeasyBase {
  @Metadata({ data: "json, name=clarification" })
  clarification?: string;

  @Metadata({ data: "json, name=clarificationCode" })
  clarificationCode: InvoiceResponseClarificationClarificationCodeEnum;

  @Metadata({ data: "json, name=clarificationCodeType" })
  clarificationCodeType: InvoiceResponseClarificationClarificationCodeTypeEnum;
}
