import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDellSwitchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteDellSwitchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class DeleteDellSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDellSwitchPathParams;

  @SpeakeasyMetadata()
  security: DeleteDellSwitchSecurity;
}


export class DeleteDellSwitchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
