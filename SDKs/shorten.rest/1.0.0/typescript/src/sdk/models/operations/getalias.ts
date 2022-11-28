import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAliasQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aliasName" })
  aliasName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domainName" })
  domainName?: string;
}


export class GetAliasSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAliasQueryParams;

  @SpeakeasyMetadata()
  security: GetAliasSecurity;
}


export class GetAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aliasModel?: shared.AliasModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
