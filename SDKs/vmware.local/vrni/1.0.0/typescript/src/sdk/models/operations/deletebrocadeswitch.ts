import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteBrocadeSwitchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteBrocadeSwitchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class DeleteBrocadeSwitchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteBrocadeSwitchPathParams;

  @Metadata()
  security: DeleteBrocadeSwitchSecurity;
}


export class DeleteBrocadeSwitchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
