import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountSitesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetAccountSitesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountSitesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAccountSitesQueryParams;

  @SpeakeasyMetadata()
  security: GetAccountSitesSecurity;
}


export class GetAccountSitesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Site })
  sites?: shared.Site[];

  @SpeakeasyMetadata()
  statusCode: number;
}
