import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDellSwitchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDellSwitchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetDellSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDellSwitchPathParams;

  @SpeakeasyMetadata()
  security: GetDellSwitchSecurity;
}


export class GetDellSwitchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dellSwitchDataSource?: shared.DellSwitchDataSource;

  @SpeakeasyMetadata()
  statusCode: number;
}
