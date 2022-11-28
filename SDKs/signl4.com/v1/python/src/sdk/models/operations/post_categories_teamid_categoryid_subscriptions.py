from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostCategoriesTeamIDCategoryIDSubscriptionsPathParams:
    category_id: str = field(metadata={'path_param': { 'field_name': 'categoryId', 'style': 'simple', 'explode': False }})
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCategoriesTeamIDCategoryIDSubscriptionsRequests:
    category_subscription_infos: Optional[List[shared.CategorySubscriptionInfo]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    category_subscription_infos1: Optional[List[shared.CategorySubscriptionInfo]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    category_subscription_infos2: Optional[List[shared.CategorySubscriptionInfo]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    category_subscription_infos3: Optional[List[shared.CategorySubscriptionInfo]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostCategoriesTeamIDCategoryIDSubscriptionsRequest:
    path_params: PostCategoriesTeamIDCategoryIDSubscriptionsPathParams = field()
    request: Optional[PostCategoriesTeamIDCategoryIDSubscriptionsRequests] = field(default=None)
    

@dataclass
class PostCategoriesTeamIDCategoryIDSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    category_subscription_infos: Optional[List[shared.CategorySubscriptionInfo]] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
