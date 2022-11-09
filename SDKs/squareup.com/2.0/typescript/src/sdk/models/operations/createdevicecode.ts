import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDeviceCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateDeviceCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDeviceCodeRequest;

  @Metadata()
  security: CreateDeviceCodeSecurity;
}


export class CreateDeviceCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDeviceCodeResponse?: shared.CreateDeviceCodeResponse;

  @Metadata()
  statusCode: number;
}
