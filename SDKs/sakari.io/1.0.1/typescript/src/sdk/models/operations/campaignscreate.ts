import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CampaignsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class CampaignsCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class CampaignsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CampaignsCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CampaignRequest;

  @Metadata()
  security: CampaignsCreateSecurity;
}


export class CampaignsCreateResponse extends SpeakeasyBase {
  @Metadata()
  campaignResponse?: shared.CampaignResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
