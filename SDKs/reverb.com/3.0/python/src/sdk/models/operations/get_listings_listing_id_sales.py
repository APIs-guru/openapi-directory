from dataclasses import dataclass, field
from typing import List


@dataclass
class GetListingsListingIDSalesPathParams:
    listing_id: str = field(default=None, metadata={'path_param': { 'field_name': 'listing_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsListingIDSalesRequest:
    path_params: GetListingsListingIDSalesPathParams = field(default=None)
    

@dataclass
class GetListingsListingIDSalesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
