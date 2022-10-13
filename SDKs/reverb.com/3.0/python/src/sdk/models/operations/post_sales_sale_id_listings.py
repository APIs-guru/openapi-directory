from dataclasses import dataclass, field
from typing import List


@dataclass
class PostSalesSaleIDListingsPathParams:
    sale_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sale_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSalesSaleIDListingsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostSalesSaleIDListingsRequest:
    path_params: PostSalesSaleIDListingsPathParams = field(default=None)
    security: PostSalesSaleIDListingsSecurity = field(default=None)
    

@dataclass
class PostSalesSaleIDListingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
