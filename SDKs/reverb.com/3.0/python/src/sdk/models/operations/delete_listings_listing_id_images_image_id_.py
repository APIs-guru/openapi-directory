from dataclasses import dataclass, field
from typing import List


@dataclass
class DeleteListingsListingIDImagesImageIDPathParams:
    image_id: str = field(default=None, metadata={'path_param': { 'field_name': 'image_id', 'style': 'simple', 'explode': False }})
    listing_id: str = field(default=None, metadata={'path_param': { 'field_name': 'listing_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteListingsListingIDImagesImageIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteListingsListingIDImagesImageIDRequest:
    path_params: DeleteListingsListingIDImagesImageIDPathParams = field(default=None)
    security: DeleteListingsListingIDImagesImageIDSecurity = field(default=None)
    

@dataclass
class DeleteListingsListingIDImagesImageIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
