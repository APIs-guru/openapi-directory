import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionId" })
  versionId: string;
}


export class UpdateVersionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateVersionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Version;

  @SpeakeasyMetadata()
  security: UpdateVersionSecurity;
}


export class UpdateVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
