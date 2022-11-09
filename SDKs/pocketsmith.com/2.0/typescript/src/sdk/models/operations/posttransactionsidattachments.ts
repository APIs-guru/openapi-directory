import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTransactionsIdAttachmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostTransactionsIdAttachmentsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachment_id" })
  attachmentId?: number;
}


export class PostTransactionsIdAttachmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTransactionsIdAttachmentsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostTransactionsIdAttachmentsRequestBody;
}


export class PostTransactionsIdAttachmentsResponse extends SpeakeasyBase {
  @Metadata()
  attachment?: shared.Attachment;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
