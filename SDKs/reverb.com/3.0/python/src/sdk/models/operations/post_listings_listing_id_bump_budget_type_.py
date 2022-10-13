from dataclasses import dataclass, field
from typing import List


@dataclass
class PostListingsListingIDBumpBudgetTypePathParams:
    budget_type: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_type', 'style': 'simple', 'explode': False }})
    listing_id: str = field(default=None, metadata={'path_param': { 'field_name': 'listing_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostListingsListingIDBumpBudgetTypeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostListingsListingIDBumpBudgetTypeRequest:
    path_params: PostListingsListingIDBumpBudgetTypePathParams = field(default=None)
    security: PostListingsListingIDBumpBudgetTypeSecurity = field(default=None)
    

@dataclass
class PostListingsListingIDBumpBudgetTypeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
