from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCategoriesTeamIDCategoryIDSubscriptionsPathParams:
    category_id: str = field(metadata={'path_param': { 'field_name': 'categoryId', 'style': 'simple', 'explode': False }})
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoriesTeamIDCategoryIDSubscriptionsRequest:
    path_params: GetCategoriesTeamIDCategoryIDSubscriptionsPathParams = field()
    

@dataclass
class GetCategoriesTeamIDCategoryIDSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    category_subscription_infos: Optional[List[shared.CategorySubscriptionInfo]] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
