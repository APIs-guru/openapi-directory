import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAttachmentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutAttachmentsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class PutAttachmentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAttachmentsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutAttachmentsIdRequestBody;
}


export class PutAttachmentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachment?: shared.Attachment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
