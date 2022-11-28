import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppRole } from "./approle";
import { GroupMembershipClaimsEnum } from "./groupmembershipclaimsenum";
import { InformationalUrl } from "./informationalurl";
import { OAuth2Permission } from "./oauth2permission";
import { OptionalClaims } from "./optionalclaims";
import { PreAuthorizedApplication } from "./preauthorizedapplication";



// ApplicationCreateParameters
/** 
 * Request parameters for creating a new application.
**/
export class ApplicationCreateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowGuestsSignIn" })
  allowGuestsSignIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowPassthroughUsers" })
  allowPassthroughUsers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=appLogoUrl" })
  appLogoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=appPermissions" })
  appPermissions?: string[];

  @SpeakeasyMetadata({ data: "json, name=appRoles", elemType: AppRole })
  appRoles?: AppRole[];

  @SpeakeasyMetadata({ data: "json, name=availableToOtherTenants" })
  availableToOtherTenants?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=errorUrl" })
  errorUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=groupMembershipClaims" })
  groupMembershipClaims?: GroupMembershipClaimsEnum;

  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: string;

  @SpeakeasyMetadata({ data: "json, name=identifierUris" })
  identifierUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=informationalUrls" })
  informationalUrls?: InformationalUrl;

  @SpeakeasyMetadata({ data: "json, name=isDeviceOnlyAuthSupported" })
  isDeviceOnlyAuthSupported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keyCredentials" })
  keyCredentials?: Map<string, Map<string, any>>[];

  @SpeakeasyMetadata({ data: "json, name=knownClientApplications" })
  knownClientApplications?: string[];

  @SpeakeasyMetadata({ data: "json, name=logoutUrl" })
  logoutUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth2AllowImplicitFlow" })
  oauth2AllowImplicitFlow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oauth2AllowUrlPathMatching" })
  oauth2AllowUrlPathMatching?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oauth2Permissions", elemType: OAuth2Permission })
  oauth2Permissions?: OAuth2Permission[];

  @SpeakeasyMetadata({ data: "json, name=oauth2RequirePostResponse" })
  oauth2RequirePostResponse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=optionalClaims" })
  optionalClaims?: OptionalClaims;

  @SpeakeasyMetadata({ data: "json, name=orgRestrictions" })
  orgRestrictions?: string[];

  @SpeakeasyMetadata({ data: "json, name=passwordCredentials" })
  passwordCredentials?: Map<string, Map<string, any>>[];

  @SpeakeasyMetadata({ data: "json, name=preAuthorizedApplications", elemType: PreAuthorizedApplication })
  preAuthorizedApplications?: PreAuthorizedApplication[];

  @SpeakeasyMetadata({ data: "json, name=publicClient" })
  publicClient?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publisherDomain" })
  publisherDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=replyUrls" })
  replyUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=requiredResourceAccess" })
  requiredResourceAccess?: Map<string, Map<string, any>>[];

  @SpeakeasyMetadata({ data: "json, name=samlMetadataUrl" })
  samlMetadataUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=signInAudience" })
  signInAudience?: string;

  @SpeakeasyMetadata({ data: "json, name=wwwHomepage" })
  wwwHomepage?: string;
}
