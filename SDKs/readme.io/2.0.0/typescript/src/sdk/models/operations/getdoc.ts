import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDocPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetDocHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-readme-version" })
  xReadmeVersion: string;
}


export class GetDocSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class GetDocRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocPathParams;

  @SpeakeasyMetadata()
  headers: GetDocHeaders;

  @SpeakeasyMetadata()
  security: GetDocSecurity;
}


export class GetDocResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
