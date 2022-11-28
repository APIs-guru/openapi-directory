import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AttachmentMimeTypeEnum {
    ApplicationPdf = "application/pdf"
}


// Attachment
/** 
 * A document attachment to the invoice.
**/
export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType: AttachmentMimeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=primaryImage" })
  primaryImage?: boolean;
}
