from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyViewedListingsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyViewedListingsRequest:
    security: GetMyViewedListingsSecurity = field()
    

@dataclass
class GetMyViewedListingsResponse:
    content_type: str = field()
    status_code: int = field()
    
