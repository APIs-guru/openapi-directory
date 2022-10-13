from dataclasses import dataclass, field
from typing import List


@dataclass
class GetListingsListingIDImagesPathParams:
    listing_id: str = field(default=None, metadata={'path_param': { 'field_name': 'listing_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsListingIDImagesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingsListingIDImagesRequest:
    path_params: GetListingsListingIDImagesPathParams = field(default=None)
    security: GetListingsListingIDImagesSecurity = field(default=None)
    

@dataclass
class GetListingsListingIDImagesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
