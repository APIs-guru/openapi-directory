import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceEnumScanMessageContentEnum } from "./serviceenumscanmessagecontentenum";

export enum MessagingV1ServiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum MessagingV1ServiceInboundMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class MessagingV1Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=area_code_geomatch" })
  areaCodeGeomatch?: boolean;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=fallback_method" })
  fallbackMethod?: MessagingV1ServiceFallbackMethodEnum;

  @Metadata({ data: "json, name=fallback_to_long_code" })
  fallbackToLongCode?: boolean;

  @Metadata({ data: "json, name=fallback_url" })
  fallbackUrl?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=inbound_method" })
  inboundMethod?: MessagingV1ServiceInboundMethodEnum;

  @Metadata({ data: "json, name=inbound_request_url" })
  inboundRequestUrl?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=mms_converter" })
  mmsConverter?: boolean;

  @Metadata({ data: "json, name=scan_message_content" })
  scanMessageContent?: ServiceEnumScanMessageContentEnum;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=smart_encoding" })
  smartEncoding?: boolean;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=sticky_sender" })
  stickySender?: boolean;

  @Metadata({ data: "json, name=synchronous_validation" })
  synchronousValidation?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=us_app_to_person_registered" })
  usAppToPersonRegistered?: boolean;

  @Metadata({ data: "json, name=use_inbound_webhook_on_number" })
  useInboundWebhookOnNumber?: boolean;

  @Metadata({ data: "json, name=usecase" })
  usecase?: string;

  @Metadata({ data: "json, name=validity_period" })
  validityPeriod?: number;
}
