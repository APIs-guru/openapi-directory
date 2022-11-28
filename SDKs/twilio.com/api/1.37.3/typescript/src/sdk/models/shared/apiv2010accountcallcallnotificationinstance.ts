import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class ApiV2010AccountCallCallNotificationInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=call_sid" })
  callSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=log" })
  log?: string;

  @SpeakeasyMetadata({ data: "json, name=message_date" })
  messageDate?: string;

  @SpeakeasyMetadata({ data: "json, name=message_text" })
  messageText?: string;

  @SpeakeasyMetadata({ data: "json, name=more_info" })
  moreInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=request_method" })
  requestMethod?: ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=request_url" })
  requestUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=request_variables" })
  requestVariables?: string;

  @SpeakeasyMetadata({ data: "json, name=response_body" })
  responseBody?: string;

  @SpeakeasyMetadata({ data: "json, name=response_headers" })
  responseHeaders?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
