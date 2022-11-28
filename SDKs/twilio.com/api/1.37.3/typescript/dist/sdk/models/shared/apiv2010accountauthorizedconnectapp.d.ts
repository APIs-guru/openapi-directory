import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedConnectAppEnumPermissionEnum } from "./authorizedconnectappenumpermissionenum";
export declare class ApiV2010AccountAuthorizedConnectApp extends SpeakeasyBase {
    accountSid?: string;
    connectAppCompanyName?: string;
    connectAppDescription?: string;
    connectAppFriendlyName?: string;
    connectAppHomepageUrl?: string;
    connectAppSid?: string;
    dateCreated?: string;
    dateUpdated?: string;
    permissions?: AuthorizedConnectAppEnumPermissionEnum[];
    uri?: string;
}
