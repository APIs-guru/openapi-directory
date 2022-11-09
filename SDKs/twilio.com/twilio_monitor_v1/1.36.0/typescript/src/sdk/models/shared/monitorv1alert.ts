import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MonitorV1AlertRequestMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class MonitorV1Alert extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=alert_text" })
  alertText?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_generated" })
  dateGenerated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=error_code" })
  errorCode?: string;

  @Metadata({ data: "json, name=log_level" })
  logLevel?: string;

  @Metadata({ data: "json, name=more_info" })
  moreInfo?: string;

  @Metadata({ data: "json, name=request_method" })
  requestMethod?: MonitorV1AlertRequestMethodEnum;

  @Metadata({ data: "json, name=request_url" })
  requestUrl?: string;

  @Metadata({ data: "json, name=resource_sid" })
  resourceSid?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
