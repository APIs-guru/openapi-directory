import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attachment } from "./attachment";
import { SendableDocument } from "./sendabledocument";
import { Routing } from "./routing";


// DocumentSubmission
/** 
 * The document you want Storecove to send, with some meta-data.
**/
export class DocumentSubmission extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachments", elemType: shared.Attachment })
  attachments?: Attachment[];

  @Metadata({ data: "json, name=createPrimaryImage" })
  createPrimaryImage?: boolean;

  @Metadata({ data: "json, name=document" })
  document?: SendableDocument;

  @Metadata({ data: "json, name=idempotencyGuid" })
  idempotencyGuid?: string;

  @Metadata({ data: "json, name=legalEntityId" })
  legalEntityId?: number;

  @Metadata({ data: "json, name=receiveGuid" })
  receiveGuid?: string;

  @Metadata({ data: "json, name=routing" })
  routing?: Routing;
}
