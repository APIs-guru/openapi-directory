import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizedConnectAppEnumPermissionEnum } from "./authorizedconnectappenumpermissionenum";


export class ApiV2010AccountAuthorizedConnectApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=connect_app_company_name" })
  connectAppCompanyName?: string;

  @Metadata({ data: "json, name=connect_app_description" })
  connectAppDescription?: string;

  @Metadata({ data: "json, name=connect_app_friendly_name" })
  connectAppFriendlyName?: string;

  @Metadata({ data: "json, name=connect_app_homepage_url" })
  connectAppHomepageUrl?: string;

  @Metadata({ data: "json, name=connect_app_sid" })
  connectAppSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: AuthorizedConnectAppEnumPermissionEnum[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
