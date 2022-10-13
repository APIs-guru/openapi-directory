from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListLocationsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListLocationsRequest:
    security: ListLocationsSecurity = field(default=None)
    

@dataclass
class ListLocationsResponse:
    content_type: str = field(default=None)
    list_locations_response: Optional[shared.ListLocationsResponse] = field(default=None)
    status_code: int = field(default=None)
    
