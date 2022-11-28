import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { Invoice } from "./invoice";
import { InvoiceData } from "./invoicedata";
import { InvoiceRecipient } from "./invoicerecipient";
import { Routing } from "./routing";


export enum InvoiceSubmissionModeEnum {
    Direct = "direct"
}


// InvoiceSubmission
/** 
 * The invoice you want Storecove to process, with some meta-data.
**/
export class InvoiceSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment })
  attachments?: Attachment[];

  @SpeakeasyMetadata({ data: "json, name=createPrimaryImage" })
  createPrimaryImage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: string;

  @SpeakeasyMetadata({ data: "json, name=documentUrl" })
  documentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=idempotencyGuid" })
  idempotencyGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice" })
  invoice?: Invoice;

  @SpeakeasyMetadata({ data: "json, name=invoiceData" })
  invoiceData?: InvoiceData;

  @SpeakeasyMetadata({ data: "json, name=invoiceRecipient" })
  invoiceRecipient?: InvoiceRecipient;

  @SpeakeasyMetadata({ data: "json, name=legalEntityId" })
  legalEntityId?: number;

  @SpeakeasyMetadata({ data: "json, name=legalSupplierId" })
  legalSupplierId?: number;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: InvoiceSubmissionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=routing" })
  routing?: Routing;

  @SpeakeasyMetadata({ data: "json, name=supplierId" })
  supplierId?: number;
}
