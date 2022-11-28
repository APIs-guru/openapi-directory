from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetListingsListingIDBumpPathParams:
    listing_id: str = field(metadata={'path_param': { 'field_name': 'listing_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsListingIDBumpSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingsListingIDBumpRequest:
    path_params: GetListingsListingIDBumpPathParams = field()
    security: GetListingsListingIDBumpSecurity = field()
    

@dataclass
class GetListingsListingIDBumpResponse:
    content_type: str = field()
    status_code: int = field()
    
