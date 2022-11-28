import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetApplicationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApplicationPathParams;

  @SpeakeasyMetadata()
  security: GetApplicationSecurity;
}


export class GetApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  application?: shared.Application;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
