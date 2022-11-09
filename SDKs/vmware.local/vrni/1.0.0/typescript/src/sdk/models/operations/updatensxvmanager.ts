import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNsxvManagerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateNsxvManagerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateNsxvManagerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNsxvManagerPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.NsxvManagerDataSource;

  @Metadata()
  security: UpdateNsxvManagerSecurity;
}


export class UpdateNsxvManagerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nsxvManagerDataSource?: shared.NsxvManagerDataSource;

  @Metadata()
  statusCode: number;
}
