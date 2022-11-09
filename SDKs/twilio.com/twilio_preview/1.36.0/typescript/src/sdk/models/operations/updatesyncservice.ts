import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCSERVICE_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateSyncServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSyncServiceUpdateSyncServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AclEnabled;" })
  aclEnabled?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=ReachabilityWebhooksEnabled;" })
  reachabilityWebhooksEnabled?: boolean;

  @Metadata({ data: "form, name=WebhookUrl;" })
  webhookUrl?: string;
}


export class UpdateSyncServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncServiceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncServicePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncServiceUpdateSyncServiceRequest;

  @Metadata()
  security: UpdateSyncServiceSecurity;
}


export class UpdateSyncServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncService?: shared.PreviewSyncService;
}
