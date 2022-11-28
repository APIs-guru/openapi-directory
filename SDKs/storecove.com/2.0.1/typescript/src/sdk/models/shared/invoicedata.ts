import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InvoiceDataConversionStrategyEnum {
    Ubl = "ubl",
    Cii = "cii",
    Idoc = "idoc"
}


// InvoiceData
/** 
 * The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both.
**/
export class InvoiceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversionStrategy" })
  conversionStrategy?: InvoiceDataConversionStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: string;
}
