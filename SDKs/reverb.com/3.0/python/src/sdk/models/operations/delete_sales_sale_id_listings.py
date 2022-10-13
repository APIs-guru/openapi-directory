from dataclasses import dataclass, field
from typing import List


@dataclass
class DeleteSalesSaleIDListingsPathParams:
    sale_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sale_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSalesSaleIDListingsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSalesSaleIDListingsRequest:
    path_params: DeleteSalesSaleIDListingsPathParams = field(default=None)
    security: DeleteSalesSaleIDListingsSecurity = field(default=None)
    

@dataclass
class DeleteSalesSaleIDListingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
