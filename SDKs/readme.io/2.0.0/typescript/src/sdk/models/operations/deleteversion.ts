import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionId" })
  versionId: string;
}


export class DeleteVersionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVersionPathParams;

  @SpeakeasyMetadata()
  security: DeleteVersionSecurity;
}


export class DeleteVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
