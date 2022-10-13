from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import approle
from . import groupmembershipclaims_enum
from . import informationalurl
from . import oauth2permission
from . import optionalclaims
from . import preauthorizedapplication


@dataclass_json
@dataclass
class ApplicationUpdateParameters:
    allow_guests_sign_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowGuestsSignIn' }})
    allow_passthrough_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowPassthroughUsers' }})
    app_logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appLogoUrl' }})
    app_permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appPermissions' }})
    app_roles: Optional[List[approle.AppRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appRoles' }})
    available_to_other_tenants: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableToOtherTenants' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    error_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorUrl' }})
    group_membership_claims: Optional[groupmembershipclaims_enum.GroupMembershipClaimsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupMembershipClaims' }})
    homepage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homepage' }})
    identifier_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifierUris' }})
    informational_urls: Optional[informationalurl.InformationalURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'informationalUrls' }})
    is_device_only_auth_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDeviceOnlyAuthSupported' }})
    key_credentials: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyCredentials' }})
    known_client_applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knownClientApplications' }})
    logout_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logoutUrl' }})
    oauth2_allow_implicit_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth2AllowImplicitFlow' }})
    oauth2_allow_url_path_matching: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth2AllowUrlPathMatching' }})
    oauth2_permissions: Optional[List[oauth2permission.OAuth2Permission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth2Permissions' }})
    oauth2_require_post_response: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth2RequirePostResponse' }})
    optional_claims: Optional[optionalclaims.OptionalClaims] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optionalClaims' }})
    org_restrictions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgRestrictions' }})
    password_credentials: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordCredentials' }})
    pre_authorized_applications: Optional[List[preauthorizedapplication.PreAuthorizedApplication]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preAuthorizedApplications' }})
    public_client: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicClient' }})
    publisher_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherDomain' }})
    reply_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyUrls' }})
    required_resource_access: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredResourceAccess' }})
    saml_metadata_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samlMetadataUrl' }})
    sign_in_audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signInAudience' }})
    www_homepage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wwwHomepage' }})
    
