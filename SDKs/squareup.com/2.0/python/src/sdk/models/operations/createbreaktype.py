from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateBreakTypeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateBreakTypeRequest:
    request: shared.CreateBreakTypeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateBreakTypeSecurity = field(default=None)
    

@dataclass
class CreateBreakTypeResponse:
    content_type: str = field(default=None)
    create_break_type_response: Optional[shared.CreateBreakTypeResponse] = field(default=None)
    status_code: int = field(default=None)
    
