import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvoiceDataConversionStrategyEnum {
    Ubl = "ubl",
    Cii = "cii",
    Idoc = "idoc"
}
/**
 * The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both.
**/
export declare class InvoiceData extends SpeakeasyBase {
    conversionStrategy?: InvoiceDataConversionStrategyEnum;
    document?: string;
}
