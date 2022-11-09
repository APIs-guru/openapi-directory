import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CampaignsFetchAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class CampaignsFetchAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class CampaignsFetchAllSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class CampaignsFetchAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CampaignsFetchAllPathParams;

  @Metadata()
  queryParams: CampaignsFetchAllQueryParams;

  @Metadata()
  security: CampaignsFetchAllSecurity;
}


export class CampaignsFetchAllResponse extends SpeakeasyBase {
  @Metadata()
  campaignsResponse?: shared.CampaignsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
