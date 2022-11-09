import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PreflightInvoiceRecipientResultResultCodeEnum {
    Ok = "ok"
,    Nok = "nok"
}


// PreflightInvoiceRecipientResult
/** 
 * The result of preflighting an invoice recipient
**/
export class PreflightInvoiceRecipientResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: PreflightInvoiceRecipientResultResultCodeEnum;
}
