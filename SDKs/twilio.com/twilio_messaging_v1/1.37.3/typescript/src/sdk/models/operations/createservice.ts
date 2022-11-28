import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateServiceServerList = [
	"https://messaging.twilio.com",
] as const;

export enum CreateServiceCreateServiceRequestFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateServiceCreateServiceRequestInboundMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateServiceCreateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AreaCodeGeomatch;" })
  areaCodeGeomatch?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FallbackMethod;" })
  fallbackMethod?: CreateServiceCreateServiceRequestFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=FallbackToLongCode;" })
  fallbackToLongCode?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FallbackUrl;" })
  fallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=InboundMethod;" })
  inboundMethod?: CreateServiceCreateServiceRequestInboundMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=InboundRequestUrl;" })
  inboundRequestUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=MmsConverter;" })
  mmsConverter?: boolean;

  @SpeakeasyMetadata({ data: "form, name=ScanMessageContent;" })
  scanMessageContent?: shared.ServiceEnumScanMessageContentEnum;

  @SpeakeasyMetadata({ data: "form, name=SmartEncoding;" })
  smartEncoding?: boolean;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StickySender;" })
  stickySender?: boolean;

  @SpeakeasyMetadata({ data: "form, name=SynchronousValidation;" })
  synchronousValidation?: boolean;

  @SpeakeasyMetadata({ data: "form, name=UseInboundWebhookOnNumber;" })
  useInboundWebhookOnNumber?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Usecase;" })
  usecase?: string;

  @SpeakeasyMetadata({ data: "form, name=ValidityPeriod;" })
  validityPeriod?: number;
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
  messagingV1Service?: shared.MessagingV1Service;
}
