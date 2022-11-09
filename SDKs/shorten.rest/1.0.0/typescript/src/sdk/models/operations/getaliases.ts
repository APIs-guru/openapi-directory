import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAliasesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=continueFrom" })
  continueFrom?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domainName" })
  domainName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetAliasesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetAliasesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAliasesQueryParams;

  @Metadata()
  security: GetAliasesSecurity;
}


export class GetAliasesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAliasesModel?: shared.GetAliasesModel;

  @Metadata()
  statusCode: number;
}
