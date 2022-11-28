import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAliasesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=continueFrom" })
  continueFrom?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetAliasesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetAliasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAliasesQueryParams;

  @SpeakeasyMetadata()
  security: GetAliasesSecurity;
}


export class GetAliasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAliasesModel?: shared.GetAliasesModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
