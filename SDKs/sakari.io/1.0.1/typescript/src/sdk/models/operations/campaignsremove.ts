import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CampaignsRemovePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaignId" })
  campaignId: string;
}


export class CampaignsRemoveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class CampaignsRemoveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CampaignsRemovePathParams;

  @Metadata()
  security: CampaignsRemoveSecurity;
}


export class CampaignsRemove200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: boolean;
}


export class CampaignsRemoveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  campaignsRemove200ApplicationJsonObject?: CampaignsRemove200ApplicationJson;
}
