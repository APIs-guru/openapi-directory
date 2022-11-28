import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceResponseClarification } from "./invoiceresponseclarification";
export declare enum DocumentInvoiceResponseResponseCodeEnum {
    Ab = "AB",
    Ip = "IP",
    Uq = "UQ",
    Re = "RE",
    Ap = "AP",
    Pd = "PD"
}
/**
 * The invoice response to send.
**/
export declare class DocumentInvoiceResponse extends SpeakeasyBase {
    clarifications?: InvoiceResponseClarification[];
    effectiveDate?: string;
    note?: string;
    responseCode: DocumentInvoiceResponseResponseCodeEnum;
}
