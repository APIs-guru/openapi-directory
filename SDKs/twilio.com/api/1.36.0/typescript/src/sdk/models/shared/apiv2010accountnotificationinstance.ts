import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApiV2010AccountNotificationInstanceRequestMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class ApiV2010AccountNotificationInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=call_sid" })
  callSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=error_code" })
  errorCode?: string;

  @Metadata({ data: "json, name=log" })
  log?: string;

  @Metadata({ data: "json, name=message_date" })
  messageDate?: string;

  @Metadata({ data: "json, name=message_text" })
  messageText?: string;

  @Metadata({ data: "json, name=more_info" })
  moreInfo?: string;

  @Metadata({ data: "json, name=request_method" })
  requestMethod?: ApiV2010AccountNotificationInstanceRequestMethodEnum;

  @Metadata({ data: "json, name=request_url" })
  requestUrl?: string;

  @Metadata({ data: "json, name=request_variables" })
  requestVariables?: string;

  @Metadata({ data: "json, name=response_body" })
  responseBody?: string;

  @Metadata({ data: "json, name=response_headers" })
  responseHeaders?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
