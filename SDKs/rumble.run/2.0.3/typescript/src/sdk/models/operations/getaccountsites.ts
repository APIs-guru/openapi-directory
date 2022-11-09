import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountSitesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetAccountSitesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountSitesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAccountSitesQueryParams;

  @Metadata()
  security: GetAccountSitesSecurity;
}


export class GetAccountSitesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Site })
  sites?: shared.Site[];

  @Metadata()
  statusCode: number;
}
