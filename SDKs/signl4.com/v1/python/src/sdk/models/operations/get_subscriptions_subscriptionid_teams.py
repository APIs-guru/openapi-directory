from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSubscriptionsSubscriptionIDTeamsPathParams:
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionsSubscriptionIDTeamsRequest:
    path_params: GetSubscriptionsSubscriptionIDTeamsPathParams = field()
    

@dataclass
class GetSubscriptionsSubscriptionIDTeamsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    team_infos: Optional[List[shared.TeamInfo]] = field(default=None)
    
