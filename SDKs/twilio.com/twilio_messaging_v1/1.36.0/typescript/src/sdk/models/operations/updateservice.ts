import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESERVICE_SERVERS = [
	"https://messaging.twilio.com",
];



export class UpdateServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateServiceUpdateServiceRequestFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestInboundMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AreaCodeGeomatch;" })
  areaCodeGeomatch?: boolean;

  @Metadata({ data: "form, name=FallbackMethod;" })
  fallbackMethod?: UpdateServiceUpdateServiceRequestFallbackMethodEnum;

  @Metadata({ data: "form, name=FallbackToLongCode;" })
  fallbackToLongCode?: boolean;

  @Metadata({ data: "form, name=FallbackUrl;" })
  fallbackUrl?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=InboundMethod;" })
  inboundMethod?: UpdateServiceUpdateServiceRequestInboundMethodEnum;

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
  messagingV1Service?: shared.MessagingV1Service;
}
