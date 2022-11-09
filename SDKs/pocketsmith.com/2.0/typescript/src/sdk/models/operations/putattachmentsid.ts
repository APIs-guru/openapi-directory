import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAttachmentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutAttachmentsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PutAttachmentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAttachmentsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutAttachmentsIdRequestBody;
}


export class PutAttachmentsIdResponse extends SpeakeasyBase {
  @Metadata()
  attachment?: shared.Attachment;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
