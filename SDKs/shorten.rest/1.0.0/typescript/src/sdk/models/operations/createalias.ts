import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAliasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=aliasName" })
  aliasName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domainName" })
  domainName?: string;
}


export class CreateAliasSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class CreateAliasRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateAliasQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAliasModel;

  @Metadata()
  security: CreateAliasSecurity;
}


export class CreateAliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createAliasResponseModel?: shared.CreateAliasResponseModel;

  @Metadata()
  statusCode: number;
}
