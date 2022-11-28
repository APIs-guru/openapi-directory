import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectAppEnumPermissionEnum } from "./connectappenumpermissionenum";


export enum ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class ApiV2010AccountConnectApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=authorize_redirect_url" })
  authorizeRedirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=deauthorize_callback_method" })
  deauthorizeCallbackMethod?: ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=deauthorize_callback_url" })
  deauthorizeCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=homepage_url" })
  homepageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: ConnectAppEnumPermissionEnum[];

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
