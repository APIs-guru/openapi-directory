import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESYNCSERVICE_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateSyncServiceCreateSyncServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AclEnabled;" })
  aclEnabled?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=ReachabilityWebhooksEnabled;" })
  reachabilityWebhooksEnabled?: boolean;

  @Metadata({ data: "form, name=WebhookUrl;" })
  webhookUrl?: string;
}


export class CreateSyncServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncServiceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncServiceCreateSyncServiceRequest;

  @Metadata()
  security: CreateSyncServiceSecurity;
}


export class CreateSyncServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncService?: shared.PreviewSyncService;
}
