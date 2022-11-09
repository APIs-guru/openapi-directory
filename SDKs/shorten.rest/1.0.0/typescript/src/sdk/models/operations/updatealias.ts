import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAliasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=aliasName" })
  aliasName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domainName" })
  domainName?: string;
}


export class UpdateAliasSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateAliasRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UpdateAliasQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAliasModel;

  @Metadata()
  security: UpdateAliasSecurity;
}


export class UpdateAliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
