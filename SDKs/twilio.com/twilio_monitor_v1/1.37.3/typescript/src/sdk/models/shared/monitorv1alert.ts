import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MonitorV1AlertRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class MonitorV1Alert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=alert_text" })
  alertText?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_generated" })
  dateGenerated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=log_level" })
  logLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=more_info" })
  moreInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=request_method" })
  requestMethod?: MonitorV1AlertRequestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=request_url" })
  requestUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_sid" })
  resourceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
