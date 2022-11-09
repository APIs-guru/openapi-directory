import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESERVICE_SERVERS = [
	"https://sync.twilio.com",
];



export class UpdateServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AclEnabled;" })
  aclEnabled?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=ReachabilityDebouncingEnabled;" })
  reachabilityDebouncingEnabled?: boolean;

  @Metadata({ data: "form, name=ReachabilityDebouncingWindow;" })
  reachabilityDebouncingWindow?: number;

  @Metadata({ data: "form, name=ReachabilityWebhooksEnabled;" })
  reachabilityWebhooksEnabled?: boolean;

  @Metadata({ data: "form, name=WebhookUrl;" })
  webhookUrl?: string;

  @Metadata({ data: "form, name=WebhooksFromRestEnabled;" })
  webhooksFromRestEnabled?: boolean;
}


export class UpdateServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateServicePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceUpdateServiceRequest;

  @Metadata()
  security: UpdateServiceSecurity;
}


export class UpdateServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1Service?: shared.SyncV1Service;
}
