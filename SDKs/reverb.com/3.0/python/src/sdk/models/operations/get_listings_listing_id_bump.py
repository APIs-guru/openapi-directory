from dataclasses import dataclass, field
from typing import List


@dataclass
class GetListingsListingIDBumpPathParams:
    listing_id: str = field(default=None, metadata={'path_param': { 'field_name': 'listing_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsListingIDBumpSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingsListingIDBumpRequest:
    path_params: GetListingsListingIDBumpPathParams = field(default=None)
    security: GetListingsListingIDBumpSecurity = field(default=None)
    

@dataclass
class GetListingsListingIDBumpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
