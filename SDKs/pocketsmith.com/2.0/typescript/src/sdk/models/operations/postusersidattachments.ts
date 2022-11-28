import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersIdAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostUsersIdAttachmentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_data" })
  fileData?: string;

  @SpeakeasyMetadata({ data: "json, name=file_name" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class PostUsersIdAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersIdAttachmentsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostUsersIdAttachmentsRequestBody;
}


export class PostUsersIdAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachment?: shared.Attachment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
