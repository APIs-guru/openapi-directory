import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CampaignsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class CampaignsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class CampaignsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CampaignsCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CampaignRequest;

  @SpeakeasyMetadata()
  security: CampaignsCreateSecurity;
}


export class CampaignsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  campaignResponse?: shared.CampaignResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
