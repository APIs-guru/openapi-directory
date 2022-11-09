import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESERVICE_SERVERS = [
	"https://messaging.twilio.com",
];


export enum CreateServiceCreateServiceRequestFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateServiceCreateServiceRequestInboundMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateServiceCreateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AreaCodeGeomatch;" })
  areaCodeGeomatch?: boolean;

  @Metadata({ data: "form, name=FallbackMethod;" })
  fallbackMethod?: CreateServiceCreateServiceRequestFallbackMethodEnum;

  @Metadata({ data: "form, name=FallbackToLongCode;" })
  fallbackToLongCode?: boolean;

  @Metadata({ data: "form, name=FallbackUrl;" })
  fallbackUrl?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=InboundMethod;" })
  inboundMethod?: CreateServiceCreateServiceRequestInboundMethodEnum;

  @Metadata({ data: "form, name=InboundRequestUrl;" })
  inboundRequestUrl?: string;

  @Metadata({ data: "form, name=MmsConverter;" })
  mmsConverter?: boolean;

  @Metadata({ data: "form, name=ScanMessageContent;" })
  scanMessageContent?: shared.ServiceEnumScanMessageContentEnum;

  @Metadata({ data: "form, name=SmartEncoding;" })
  smartEncoding?: boolean;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StickySender;" })
  stickySender?: boolean;

  @Metadata({ data: "form, name=SynchronousValidation;" })
  synchronousValidation?: boolean;

  @Metadata({ data: "form, name=UseInboundWebhookOnNumber;" })
  useInboundWebhookOnNumber?: boolean;

  @Metadata({ data: "form, name=Usecase;" })
  usecase?: string;

  @Metadata({ data: "form, name=ValidityPeriod;" })
  validityPeriod?: number;
}


export class CreateServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceCreateServiceRequest;

  @Metadata()
  security: CreateServiceSecurity;
}


export class CreateServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1Service?: shared.MessagingV1Service;
}
