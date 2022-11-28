from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OAuth2Permission:
    r"""OAuth2Permission
    Represents an OAuth 2.0 delegated permission scope. The specified OAuth 2.0 delegated permission scopes may be requested by client applications (through the requiredResourceAccess collection on the Application object) when calling a resource application. The oauth2Permissions property of the ServicePrincipal entity and of the Application entity is a collection of OAuth2Permission.
    """
    
    admin_consent_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminConsentDescription') }})
    admin_consent_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminConsentDisplayName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_consent_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userConsentDescription') }})
    user_consent_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userConsentDisplayName') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
