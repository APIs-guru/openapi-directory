import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceEnumScanMessageContentEnum } from "./serviceenumscanmessagecontentenum";


export enum MessagingV1ServiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum MessagingV1ServiceInboundMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class MessagingV1Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=area_code_geomatch" })
  areaCodeGeomatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=fallback_method" })
  fallbackMethod?: MessagingV1ServiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=fallback_to_long_code" })
  fallbackToLongCode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fallback_url" })
  fallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_method" })
  inboundMethod?: MessagingV1ServiceInboundMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=inbound_request_url" })
  inboundRequestUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=mms_converter" })
  mmsConverter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scan_message_content" })
  scanMessageContent?: ServiceEnumScanMessageContentEnum;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=smart_encoding" })
  smartEncoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=sticky_sender" })
  stickySender?: boolean;

  @SpeakeasyMetadata({ data: "json, name=synchronous_validation" })
  synchronousValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=us_app_to_person_registered" })
  usAppToPersonRegistered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_inbound_webhook_on_number" })
  useInboundWebhookOnNumber?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usecase" })
  usecase?: string;

  @SpeakeasyMetadata({ data: "json, name=validity_period" })
  validityPeriod?: number;
}
