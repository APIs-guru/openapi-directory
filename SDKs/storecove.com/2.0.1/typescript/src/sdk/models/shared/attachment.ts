import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AttachmentMimeTypeEnum {
    ApplicationPdf = "application/pdf"
}


// Attachment
/** 
 * A document attachment to the invoice.
**/
export class Attachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document: string;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType: AttachmentMimeTypeEnum;

  @Metadata({ data: "json, name=primaryImage" })
  primaryImage?: boolean;
}
