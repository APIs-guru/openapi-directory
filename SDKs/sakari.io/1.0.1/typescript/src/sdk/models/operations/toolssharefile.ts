import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ToolsShareFileMultipartFormDataMedia extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=media" })
  media: string;
}


export class ToolsShareFileMultipartFormData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  media?: ToolsShareFileMultipartFormDataMedia;
}


export class ToolsShareFileRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/octet-stream" })
  applicationOctetStream: Uint8Array;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  object?: ToolsShareFileMultipartFormData;
}


export class ToolsShareFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ToolsShareFileRequest extends SpeakeasyBase {
  @Metadata()
  request: ToolsShareFileRequests;

  @Metadata()
  security: ToolsShareFileSecurity;
}


export class ToolsShareFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  shareFileResponse?: shared.ShareFileResponse;

  @Metadata()
  statusCode: number;
}
