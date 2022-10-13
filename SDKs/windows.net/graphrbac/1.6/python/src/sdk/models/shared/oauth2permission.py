from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OAuth2Permission:
    admin_consent_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminConsentDescription' }})
    admin_consent_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminConsentDisplayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEnabled' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_consent_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userConsentDescription' }})
    user_consent_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userConsentDisplayName' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
