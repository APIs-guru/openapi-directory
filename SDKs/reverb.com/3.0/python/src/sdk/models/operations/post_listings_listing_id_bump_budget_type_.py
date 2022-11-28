from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostListingsListingIDBumpBudgetTypePathParams:
    budget_type: str = field(metadata={'path_param': { 'field_name': 'budget_type', 'style': 'simple', 'explode': False }})
    listing_id: str = field(metadata={'path_param': { 'field_name': 'listing_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostListingsListingIDBumpBudgetTypeSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostListingsListingIDBumpBudgetTypeRequest:
    path_params: PostListingsListingIDBumpBudgetTypePathParams = field()
    security: PostListingsListingIDBumpBudgetTypeSecurity = field()
    

@dataclass
class PostListingsListingIDBumpBudgetTypeResponse:
    content_type: str = field()
    status_code: int = field()
    
