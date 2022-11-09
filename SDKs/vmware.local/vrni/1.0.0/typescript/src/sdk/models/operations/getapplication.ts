import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetApplicationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApplicationPathParams;

  @Metadata()
  security: GetApplicationSecurity;
}


export class GetApplicationResponse extends SpeakeasyBase {
  @Metadata()
  application?: shared.Application;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
