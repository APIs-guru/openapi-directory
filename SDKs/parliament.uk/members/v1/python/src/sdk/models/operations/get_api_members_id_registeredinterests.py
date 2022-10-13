from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDRegisteredInterestsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDRegisteredInterestsRequest:
    path_params: GetAPIMembersIDRegisteredInterestsPathParams = field(default=None)
    

@dataclass
class GetAPIMembersIDRegisteredInterestsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    registered_interest_category_list_item: Optional[shared.RegisteredInterestCategoryListItem] = field(default=None)
    status_code: int = field(default=None)
    
