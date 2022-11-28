from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDRegisteredInterestsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDRegisteredInterestsRequest:
    path_params: GetAPIMembersIDRegisteredInterestsPathParams = field()
    

@dataclass
class GetAPIMembersIDRegisteredInterestsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    registered_interest_category_list_item: Optional[shared.RegisteredInterestCategoryListItem] = field(default=None)
    
