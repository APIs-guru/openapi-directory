import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateServiceServerList = [
	"https://sync.twilio.com",
] as const;


export class UpdateServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AclEnabled;" })
  aclEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=ReachabilityDebouncingEnabled;" })
  reachabilityDebouncingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=ReachabilityDebouncingWindow;" })
  reachabilityDebouncingWindow?: number;

  @SpeakeasyMetadata({ data: "form, name=ReachabilityWebhooksEnabled;" })
  reachabilityWebhooksEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=WebhookUrl;" })
  webhookUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=WebhooksFromRestEnabled;" })
  webhooksFromRestEnabled?: boolean;
}


export class UpdateServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateServicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceUpdateServiceRequest;

  @SpeakeasyMetadata()
  security: UpdateServiceSecurity;
}


export class UpdateServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1Service?: shared.SyncV1Service;
}
