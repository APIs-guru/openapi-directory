from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateLocationSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateLocationRequest:
    request: shared.CreateLocationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLocationSecurity = field(default=None)
    

@dataclass
class CreateLocationResponse:
    content_type: str = field(default=None)
    create_location_response: Optional[shared.CreateLocationResponse] = field(default=None)
    status_code: int = field(default=None)
    
