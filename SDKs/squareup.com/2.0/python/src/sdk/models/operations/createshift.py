from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateShiftSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateShiftRequest:
    request: shared.CreateShiftRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateShiftSecurity = field(default=None)
    

@dataclass
class CreateShiftResponse:
    content_type: str = field(default=None)
    create_shift_response: Optional[shared.CreateShiftResponse] = field(default=None)
    status_code: int = field(default=None)
    
