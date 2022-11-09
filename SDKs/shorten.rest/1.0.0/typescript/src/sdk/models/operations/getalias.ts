import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAliasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=aliasName" })
  aliasName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domainName" })
  domainName?: string;
}


export class GetAliasSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetAliasRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAliasQueryParams;

  @Metadata()
  security: GetAliasSecurity;
}


export class GetAliasResponse extends SpeakeasyBase {
  @Metadata()
  aliasModel?: shared.AliasModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
