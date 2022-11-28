from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationCreateParameters:
    r"""ApplicationCreateParameters
    Request parameters for creating a new application.
    """
    
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    allow_guests_sign_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowGuestsSignIn') }})
    allow_passthrough_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPassthroughUsers') }})
    app_logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appLogoUrl') }})
    app_permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPermissions') }})
    app_roles: Optional[List[AppRole]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appRoles') }})
    available_to_other_tenants: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableToOtherTenants') }})
    error_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorUrl') }})
    group_membership_claims: Optional[GroupMembershipClaimsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupMembershipClaims') }})
    homepage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage') }})
    identifier_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifierUris') }})
    informational_urls: Optional[InformationalURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('informationalUrls') }})
    is_device_only_auth_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeviceOnlyAuthSupported') }})
    key_credentials: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyCredentials') }})
    known_client_applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knownClientApplications') }})
    logout_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoutUrl') }})
    oauth2_allow_implicit_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2AllowImplicitFlow') }})
    oauth2_allow_url_path_matching: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2AllowUrlPathMatching') }})
    oauth2_permissions: Optional[List[OAuth2Permission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2Permissions') }})
    oauth2_require_post_response: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2RequirePostResponse') }})
    optional_claims: Optional[OptionalClaims] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optionalClaims') }})
    org_restrictions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgRestrictions') }})
    password_credentials: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordCredentials') }})
    pre_authorized_applications: Optional[List[PreAuthorizedApplication]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preAuthorizedApplications') }})
    public_client: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicClient') }})
    publisher_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherDomain') }})
    reply_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyUrls') }})
    required_resource_access: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredResourceAccess') }})
    saml_metadata_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samlMetadataUrl') }})
    sign_in_audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signInAudience') }})
    www_homepage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wwwHomepage') }})
    
