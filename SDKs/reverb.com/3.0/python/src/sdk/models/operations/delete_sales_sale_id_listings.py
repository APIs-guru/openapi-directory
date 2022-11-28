from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteSalesSaleIDListingsPathParams:
    sale_id: str = field(metadata={'path_param': { 'field_name': 'sale_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSalesSaleIDListingsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSalesSaleIDListingsRequest:
    path_params: DeleteSalesSaleIDListingsPathParams = field()
    security: DeleteSalesSaleIDListingsSecurity = field()
    

@dataclass
class DeleteSalesSaleIDListingsResponse:
    content_type: str = field()
    status_code: int = field()
    
