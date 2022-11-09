import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAliasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=aliasName" })
  aliasName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domainName" })
  domainName?: string;
}


export class DeleteAliasSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class DeleteAliasRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteAliasQueryParams;

  @Metadata()
  security: DeleteAliasSecurity;
}


export class DeleteAliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
