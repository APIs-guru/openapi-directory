import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PreflightInvoiceRecipientResultResultCodeEnum {
    Ok = "ok",
    Nok = "nok"
}
/**
 * The result of preflighting an invoice recipient
**/
export declare class PreflightInvoiceRecipientResult extends SpeakeasyBase {
    code?: PreflightInvoiceRecipientResultResultCodeEnum;
}
