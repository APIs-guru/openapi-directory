import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDellSwitchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDellSwitchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetDellSwitchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDellSwitchPathParams;

  @Metadata()
  security: GetDellSwitchSecurity;
}


export class GetDellSwitchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dellSwitchDataSource?: shared.DellSwitchDataSource;

  @Metadata()
  statusCode: number;
}
