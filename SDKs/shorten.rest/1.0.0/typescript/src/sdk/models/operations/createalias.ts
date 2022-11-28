import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAliasQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aliasName" })
  aliasName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domainName" })
  domainName?: string;
}


export class CreateAliasSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class CreateAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateAliasQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateAliasModel;

  @SpeakeasyMetadata()
  security: CreateAliasSecurity;
}


export class CreateAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createAliasResponseModel?: shared.CreateAliasResponseModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
