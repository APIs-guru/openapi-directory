import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAliasQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aliasName" })
  aliasName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domainName" })
  domainName?: string;
}


export class DeleteAliasSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class DeleteAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteAliasQueryParams;

  @SpeakeasyMetadata()
  security: DeleteAliasSecurity;
}


export class DeleteAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
