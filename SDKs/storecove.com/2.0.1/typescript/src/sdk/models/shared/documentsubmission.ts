import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { SendableDocument } from "./sendabledocument";
import { Routing } from "./routing";



// DocumentSubmission
/** 
 * The document you want Storecove to send, with some meta-data.
**/
export class DocumentSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment })
  attachments?: Attachment[];

  @SpeakeasyMetadata({ data: "json, name=createPrimaryImage" })
  createPrimaryImage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: SendableDocument;

  @SpeakeasyMetadata({ data: "json, name=idempotencyGuid" })
  idempotencyGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=legalEntityId" })
  legalEntityId?: number;

  @SpeakeasyMetadata({ data: "json, name=receiveGuid" })
  receiveGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=routing" })
  routing?: Routing;
}
