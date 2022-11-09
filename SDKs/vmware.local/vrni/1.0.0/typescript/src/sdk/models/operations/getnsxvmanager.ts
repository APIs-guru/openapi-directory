import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNsxvManagerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetNsxvManagerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetNsxvManagerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNsxvManagerPathParams;

  @Metadata()
  security: GetNsxvManagerSecurity;
}


export class GetNsxvManagerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nsxvManagerDataSource?: shared.NsxvManagerDataSource;

  @Metadata()
  statusCode: number;
}
