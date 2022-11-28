import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PreflightInvoiceRecipientResultResultCodeEnum {
    Ok = "ok",
    Nok = "nok"
}


// PreflightInvoiceRecipientResult
/** 
 * The result of preflighting an invoice recipient
**/
export class PreflightInvoiceRecipientResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: PreflightInvoiceRecipientResultResultCodeEnum;
}
