import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDocPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class UpdateDocHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-readme-version" })
  xReadmeVersion: string;
}


export class UpdateDocSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateDocRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDocPathParams;

  @Metadata()
  headers: UpdateDocHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Doc;

  @Metadata()
  security: UpdateDocSecurity;
}


export class UpdateDocResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
