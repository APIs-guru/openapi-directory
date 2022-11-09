import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=allowGuestsSignIn" })
  allowGuestsSignIn?: boolean;

  @Metadata({ data: "json, name=allowPassthroughUsers" })
  allowPassthroughUsers?: boolean;

  @Metadata({ data: "json, name=appLogoUrl" })
  appLogoUrl?: string;

  @Metadata({ data: "json, name=appPermissions" })
  appPermissions?: string[];

  @Metadata({ data: "json, name=appRoles", elemType: shared.AppRole })
  appRoles?: AppRole[];

  @Metadata({ data: "json, name=availableToOtherTenants" })
  availableToOtherTenants?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName: string;

  @Metadata({ data: "json, name=errorUrl" })
  errorUrl?: string;

  @Metadata({ data: "json, name=groupMembershipClaims" })
  groupMembershipClaims?: GroupMembershipClaimsEnum;

  @Metadata({ data: "json, name=homepage" })
  homepage?: string;

  @Metadata({ data: "json, name=identifierUris" })
  identifierUris?: string[];

  @Metadata({ data: "json, name=informationalUrls" })
  informationalUrls?: InformationalUrl;

  @Metadata({ data: "json, name=isDeviceOnlyAuthSupported" })
  isDeviceOnlyAuthSupported?: boolean;

  @Metadata({ data: "json, name=keyCredentials" })
  keyCredentials?: Map<string, Map<string, any>>[];

  @Metadata({ data: "json, name=knownClientApplications" })
  knownClientApplications?: string[];

  @Metadata({ data: "json, name=logoutUrl" })
  logoutUrl?: string;

  @Metadata({ data: "json, name=oauth2AllowImplicitFlow" })
  oauth2AllowImplicitFlow?: boolean;

  @Metadata({ data: "json, name=oauth2AllowUrlPathMatching" })
  oauth2AllowUrlPathMatching?: boolean;

  @Metadata({ data: "json, name=oauth2Permissions", elemType: shared.OAuth2Permission })
  oauth2Permissions?: OAuth2Permission[];

  @Metadata({ data: "json, name=oauth2RequirePostResponse" })
  oauth2RequirePostResponse?: boolean;

  @Metadata({ data: "json, name=optionalClaims" })
  optionalClaims?: OptionalClaims;

  @Metadata({ data: "json, name=orgRestrictions" })
  orgRestrictions?: string[];

  @Metadata({ data: "json, name=passwordCredentials" })
  passwordCredentials?: Map<string, Map<string, any>>[];

  @Metadata({ data: "json, name=preAuthorizedApplications", elemType: shared.PreAuthorizedApplication })
  preAuthorizedApplications?: PreAuthorizedApplication[];

  @Metadata({ data: "json, name=publicClient" })
  publicClient?: boolean;

  @Metadata({ data: "json, name=publisherDomain" })
  publisherDomain?: string;

  @Metadata({ data: "json, name=replyUrls" })
  replyUrls?: string[];

  @Metadata({ data: "json, name=requiredResourceAccess" })
  requiredResourceAccess?: Map<string, Map<string, any>>[];

  @Metadata({ data: "json, name=samlMetadataUrl" })
  samlMetadataUrl?: string;

  @Metadata({ data: "json, name=signInAudience" })
  signInAudience?: string;

  @Metadata({ data: "json, name=wwwHomepage" })
  wwwHomepage?: string;
}
