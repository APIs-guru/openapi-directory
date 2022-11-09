import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CampaignsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaignId" })
  campaignId: string;
}


export class CampaignsUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class CampaignsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CampaignsUpdatePathParams;

  @Metadata()
  security: CampaignsUpdateSecurity;
}


export class CampaignsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  campaignResponse?: shared.CampaignResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
