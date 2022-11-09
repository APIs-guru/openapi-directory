import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectAppEnumPermissionEnum } from "./connectappenumpermissionenum";

export enum ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class ApiV2010AccountConnectApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=authorize_redirect_url" })
  authorizeRedirectUrl?: string;

  @Metadata({ data: "json, name=company_name" })
  companyName?: string;

  @Metadata({ data: "json, name=deauthorize_callback_method" })
  deauthorizeCallbackMethod?: ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum;

  @Metadata({ data: "json, name=deauthorize_callback_url" })
  deauthorizeCallbackUrl?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=homepage_url" })
  homepageUrl?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: ConnectAppEnumPermissionEnum[];

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
