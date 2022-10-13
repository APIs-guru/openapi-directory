from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import error


@dataclass_json
@dataclass
class CreateMobileAuthorizationCodeResponse:
    authorization_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorization_code' }})
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    
