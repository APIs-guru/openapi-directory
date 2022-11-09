import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDocPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetDocHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-readme-version" })
  xReadmeVersion: string;
}


export class GetDocSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class GetDocRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDocPathParams;

  @Metadata()
  headers: GetDocHeaders;

  @Metadata()
  security: GetDocSecurity;
}


export class GetDocResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
