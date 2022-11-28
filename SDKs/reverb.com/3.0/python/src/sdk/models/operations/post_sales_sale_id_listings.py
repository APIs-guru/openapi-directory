from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostSalesSaleIDListingsPathParams:
    sale_id: str = field(metadata={'path_param': { 'field_name': 'sale_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSalesSaleIDListingsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostSalesSaleIDListingsRequest:
    path_params: PostSalesSaleIDListingsPathParams = field()
    security: PostSalesSaleIDListingsSecurity = field()
    

@dataclass
class PostSalesSaleIDListingsResponse:
    content_type: str = field()
    status_code: int = field()
    
