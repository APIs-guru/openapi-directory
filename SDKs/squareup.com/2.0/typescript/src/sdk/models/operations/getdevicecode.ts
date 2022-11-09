import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDeviceCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDeviceCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetDeviceCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCodePathParams;

  @Metadata()
  security: GetDeviceCodeSecurity;
}


export class GetDeviceCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDeviceCodeResponse?: shared.GetDeviceCodeResponse;

  @Metadata()
  statusCode: number;
}
