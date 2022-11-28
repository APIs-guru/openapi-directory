import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSyncServiceServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateSyncServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSyncServiceUpdateSyncServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AclEnabled;" })
  aclEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=ReachabilityWebhooksEnabled;" })
  reachabilityWebhooksEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=WebhookUrl;" })
  webhookUrl?: string;
}


export class UpdateSyncServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSyncServicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncServiceUpdateSyncServiceRequest;

  @SpeakeasyMetadata()
  security: UpdateSyncServiceSecurity;
}


export class UpdateSyncServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewSyncService?: shared.PreviewSyncService;
}
