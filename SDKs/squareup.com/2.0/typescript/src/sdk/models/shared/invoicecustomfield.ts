import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvoiceCustomField
/** 
 * An additional seller-defined and customer-facing field to include on the invoice. For more information, 
 * see [Custom fields](https://developer.squareup.com/docs/invoices-api/overview#custom-fields).
 * 
 * Adding custom fields to an invoice requires an 
 * [Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
**/
export class InvoiceCustomField extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=placement" })
  placement?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
