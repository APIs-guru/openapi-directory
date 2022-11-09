import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDocHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-readme-version" })
  xReadmeVersion: string;
}


export class CreateDocSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class CreateDocRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDocHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Doc;

  @Metadata()
  security: CreateDocSecurity;
}


export class CreateDocResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
