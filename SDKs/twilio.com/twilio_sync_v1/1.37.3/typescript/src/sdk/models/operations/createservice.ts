import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateServiceServerList = [
	"https://sync.twilio.com",
] as const;


export class CreateServiceCreateServiceRequest extends SpeakeasyBase {
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


export class CreateServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceCreateServiceRequest;

  @SpeakeasyMetadata()
  security: CreateServiceSecurity;
}


export class CreateServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1Service?: shared.SyncV1Service;
}
