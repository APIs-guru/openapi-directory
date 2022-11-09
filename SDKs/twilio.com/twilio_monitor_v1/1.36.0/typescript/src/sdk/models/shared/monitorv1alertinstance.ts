import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MonitorV1AlertInstanceRequestMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class MonitorV1AlertInstance extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=request_headers" })
  requestHeaders?: string;

  @Metadata({ data: "json, name=request_method" })
  requestMethod?: MonitorV1AlertInstanceRequestMethodEnum;

  @Metadata({ data: "json, name=request_url" })
  requestUrl?: string;

  @Metadata({ data: "json, name=request_variables" })
  requestVariables?: string;

  @Metadata({ data: "json, name=resource_sid" })
  resourceSid?: string;

  @Metadata({ data: "json, name=response_body" })
  responseBody?: string;

  @Metadata({ data: "json, name=response_headers" })
  responseHeaders?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
