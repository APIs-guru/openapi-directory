import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InvoiceDataConversionStrategyEnum {
    Ubl = "ubl"
,    Cii = "cii"
,    Idoc = "idoc"
}


// InvoiceData
/** 
 * The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both.
**/
export class InvoiceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversionStrategy" })
  conversionStrategy?: InvoiceDataConversionStrategyEnum;

  @Metadata({ data: "json, name=document" })
  document?: string;
}
