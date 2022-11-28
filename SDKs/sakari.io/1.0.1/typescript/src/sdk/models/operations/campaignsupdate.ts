import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CampaignsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" })
  campaignId: string;
}


export class CampaignsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class CampaignsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CampaignsUpdatePathParams;

  @SpeakeasyMetadata()
  security: CampaignsUpdateSecurity;
}


export class CampaignsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  campaignResponse?: shared.CampaignResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
