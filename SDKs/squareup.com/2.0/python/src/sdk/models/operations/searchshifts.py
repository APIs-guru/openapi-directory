from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchShiftsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchShiftsRequest:
    request: shared.SearchShiftsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchShiftsSecurity = field(default=None)
    

@dataclass
class SearchShiftsResponse:
    content_type: str = field(default=None)
    search_shifts_response: Optional[shared.SearchShiftsResponse] = field(default=None)
    status_code: int = field(default=None)
    
