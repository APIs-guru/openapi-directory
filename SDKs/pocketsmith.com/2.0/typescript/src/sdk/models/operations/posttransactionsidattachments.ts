import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTransactionsIdAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostTransactionsIdAttachmentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachment_id" })
  attachmentId?: number;
}


export class PostTransactionsIdAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTransactionsIdAttachmentsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostTransactionsIdAttachmentsRequestBody;
}


export class PostTransactionsIdAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachment?: shared.Attachment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
