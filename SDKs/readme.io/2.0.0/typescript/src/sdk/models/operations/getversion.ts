import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionId" })
  versionId: string;
}


export class GetVersionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class GetVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVersionPathParams;

  @SpeakeasyMetadata()
  security: GetVersionSecurity;
}


export class GetVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
