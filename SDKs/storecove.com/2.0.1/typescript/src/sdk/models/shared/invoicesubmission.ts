import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=attachments", elemType: shared.Attachment })
  attachments?: Attachment[];

  @Metadata({ data: "json, name=createPrimaryImage" })
  createPrimaryImage?: boolean;

  @Metadata({ data: "json, name=document" })
  document?: string;

  @Metadata({ data: "json, name=documentUrl" })
  documentUrl?: string;

  @Metadata({ data: "json, name=idempotencyGuid" })
  idempotencyGuid?: string;

  @Metadata({ data: "json, name=invoice" })
  invoice?: Invoice;

  @Metadata({ data: "json, name=invoiceData" })
  invoiceData?: InvoiceData;

  @Metadata({ data: "json, name=invoiceRecipient" })
  invoiceRecipient?: InvoiceRecipient;

  @Metadata({ data: "json, name=legalEntityId" })
  legalEntityId?: number;

  @Metadata({ data: "json, name=legalSupplierId" })
  legalSupplierId?: number;

  @Metadata({ data: "json, name=mode" })
  mode?: InvoiceSubmissionModeEnum;

  @Metadata({ data: "json, name=routing" })
  routing?: Routing;

  @Metadata({ data: "json, name=supplierId" })
  supplierId?: number;
}
