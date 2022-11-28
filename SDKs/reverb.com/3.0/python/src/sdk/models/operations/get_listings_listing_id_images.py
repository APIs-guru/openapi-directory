from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetListingsListingIDImagesPathParams:
    listing_id: str = field(metadata={'path_param': { 'field_name': 'listing_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsListingIDImagesSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingsListingIDImagesRequest:
    path_params: GetListingsListingIDImagesPathParams = field()
    security: GetListingsListingIDImagesSecurity = field()
    

@dataclass
class GetListingsListingIDImagesResponse:
    content_type: str = field()
    status_code: int = field()
    
