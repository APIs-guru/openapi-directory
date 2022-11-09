import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApiV2010AccountShortCodeSmsFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum ApiV2010AccountShortCodeSmsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class ApiV2010AccountShortCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=short_code" })
  shortCode?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sms_fallback_method" })
  smsFallbackMethod?: ApiV2010AccountShortCodeSmsFallbackMethodEnum;

  @Metadata({ data: "json, name=sms_fallback_url" })
  smsFallbackUrl?: string;

  @Metadata({ data: "json, name=sms_method" })
  smsMethod?: ApiV2010AccountShortCodeSmsMethodEnum;

  @Metadata({ data: "json, name=sms_url" })
  smsUrl?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
