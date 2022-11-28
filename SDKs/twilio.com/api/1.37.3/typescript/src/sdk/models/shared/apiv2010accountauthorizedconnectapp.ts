import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedConnectAppEnumPermissionEnum } from "./authorizedconnectappenumpermissionenum";



export class ApiV2010AccountAuthorizedConnectApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=connect_app_company_name" })
  connectAppCompanyName?: string;

  @SpeakeasyMetadata({ data: "json, name=connect_app_description" })
  connectAppDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=connect_app_friendly_name" })
  connectAppFriendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=connect_app_homepage_url" })
  connectAppHomepageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=connect_app_sid" })
  connectAppSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: AuthorizedConnectAppEnumPermissionEnum[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
