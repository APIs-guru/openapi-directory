import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CampaignsRemovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" })
  campaignId: string;
}


export class CampaignsRemoveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class CampaignsRemove200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class CampaignsRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CampaignsRemovePathParams;

  @SpeakeasyMetadata()
  security: CampaignsRemoveSecurity;
}


export class CampaignsRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  campaignsRemove200ApplicationJsonObject?: CampaignsRemove200ApplicationJson;
}
