from dataclasses import dataclass, field
from typing import List


@dataclass
class GetMyViewedListingsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyViewedListingsRequest:
    security: GetMyViewedListingsSecurity = field(default=None)
    

@dataclass
class GetMyViewedListingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
