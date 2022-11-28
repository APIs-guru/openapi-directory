import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ToolsShareFileMultipartFormDataMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=media" })
  media: string;
}


export class ToolsShareFileMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  media?: ToolsShareFileMultipartFormDataMedia;
}


export class ToolsShareFileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  applicationOctetStream: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object?: ToolsShareFileMultipartFormData;
}


export class ToolsShareFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ToolsShareFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: ToolsShareFileRequests;

  @SpeakeasyMetadata()
  security: ToolsShareFileSecurity;
}


export class ToolsShareFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  shareFileResponse?: shared.ShareFileResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
