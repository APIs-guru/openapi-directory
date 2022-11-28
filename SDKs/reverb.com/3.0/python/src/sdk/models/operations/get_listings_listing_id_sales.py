from dataclasses import dataclass, field



@dataclass
class GetListingsListingIDSalesPathParams:
    listing_id: str = field(metadata={'path_param': { 'field_name': 'listing_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsListingIDSalesRequest:
    path_params: GetListingsListingIDSalesPathParams = field()
    

@dataclass
class GetListingsListingIDSalesResponse:
    content_type: str = field()
    status_code: int = field()
    
