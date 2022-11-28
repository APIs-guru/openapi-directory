import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAliasQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aliasName" })
  aliasName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domainName" })
  domainName?: string;
}


export class UpdateAliasSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UpdateAliasQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateAliasModel;

  @SpeakeasyMetadata()
  security: UpdateAliasSecurity;
}


export class UpdateAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
