import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDocHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-readme-version" })
  xReadmeVersion: string;
}


export class CreateDocSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class CreateDocRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDocHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Doc;

  @SpeakeasyMetadata()
  security: CreateDocSecurity;
}


export class CreateDocResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
