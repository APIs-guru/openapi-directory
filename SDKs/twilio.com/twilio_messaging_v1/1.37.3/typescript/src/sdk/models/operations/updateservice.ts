import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateServiceServerList = [
	"https://messaging.twilio.com",
] as const;


export class UpdateServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateServiceUpdateServiceRequestFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestInboundMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AreaCodeGeomatch;" })
  areaCodeGeomatch?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FallbackMethod;" })
  fallbackMethod?: UpdateServiceUpdateServiceRequestFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=FallbackToLongCode;" })
  fallbackToLongCode?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FallbackUrl;" })
  fallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=InboundMethod;" })
  inboundMethod?: UpdateServiceUpdateServiceRequestInboundMethodEnum;

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
  messagingV1Service?: shared.MessagingV1Service;
}
