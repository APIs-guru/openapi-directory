from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchAvailabilitySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchAvailabilityRequest:
    request: shared.SearchAvailabilityRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchAvailabilitySecurity = field(default=None)
    

@dataclass
class SearchAvailabilityResponse:
    content_type: str = field(default=None)
    search_availability_response: Optional[shared.SearchAvailabilityResponse] = field(default=None)
    status_code: int = field(default=None)
    
