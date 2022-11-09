import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CampaignsFetchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaignId" })
  campaignId: string;
}


export class CampaignsFetchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class CampaignsFetchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CampaignsFetchPathParams;

  @Metadata()
  security: CampaignsFetchSecurity;
}


export class CampaignsFetchResponse extends SpeakeasyBase {
  @Metadata()
  campaignResponse?: shared.CampaignResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
