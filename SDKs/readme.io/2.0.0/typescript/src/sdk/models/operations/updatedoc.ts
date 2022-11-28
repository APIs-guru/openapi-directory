import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDocPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class UpdateDocHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-readme-version" })
  xReadmeVersion: string;
}


export class UpdateDocSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateDocRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDocPathParams;

  @SpeakeasyMetadata()
  headers: UpdateDocHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Doc;

  @SpeakeasyMetadata()
  security: UpdateDocSecurity;
}


export class UpdateDocResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
