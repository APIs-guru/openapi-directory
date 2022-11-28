import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CampaignsFetchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" })
  campaignId: string;
}


export class CampaignsFetchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class CampaignsFetchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CampaignsFetchPathParams;

  @SpeakeasyMetadata()
  security: CampaignsFetchSecurity;
}


export class CampaignsFetchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  campaignResponse?: shared.CampaignResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
