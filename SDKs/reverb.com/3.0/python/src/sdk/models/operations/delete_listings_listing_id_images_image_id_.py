from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteListingsListingIDImagesImageIDPathParams:
    image_id: str = field(metadata={'path_param': { 'field_name': 'image_id', 'style': 'simple', 'explode': False }})
    listing_id: str = field(metadata={'path_param': { 'field_name': 'listing_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteListingsListingIDImagesImageIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteListingsListingIDImagesImageIDRequest:
    path_params: DeleteListingsListingIDImagesImageIDPathParams = field()
    security: DeleteListingsListingIDImagesImageIDSecurity = field()
    

@dataclass
class DeleteListingsListingIDImagesImageIDResponse:
    content_type: str = field()
    status_code: int = field()
    
