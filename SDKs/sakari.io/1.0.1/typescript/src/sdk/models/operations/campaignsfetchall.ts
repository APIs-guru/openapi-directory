import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CampaignsFetchAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class CampaignsFetchAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class CampaignsFetchAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class CampaignsFetchAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CampaignsFetchAllPathParams;

  @SpeakeasyMetadata()
  queryParams: CampaignsFetchAllQueryParams;

  @SpeakeasyMetadata()
  security: CampaignsFetchAllSecurity;
}


export class CampaignsFetchAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  campaignsResponse?: shared.CampaignsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
