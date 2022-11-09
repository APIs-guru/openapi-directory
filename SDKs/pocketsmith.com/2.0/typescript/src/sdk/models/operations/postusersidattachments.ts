import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersIdAttachmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostUsersIdAttachmentsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=file_data" })
  fileData?: string;

  @Metadata({ data: "json, name=file_name" })
  fileName?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PostUsersIdAttachmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersIdAttachmentsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostUsersIdAttachmentsRequestBody;
}


export class PostUsersIdAttachmentsResponse extends SpeakeasyBase {
  @Metadata()
  attachment?: shared.Attachment;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
