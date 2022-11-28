from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetWebhooksQueryParams:
    team_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'teamId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWebhooksRequest:
    query_params: GetWebhooksQueryParams = field()
    

@dataclass
class GetWebhooksResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    webhook_infos: Optional[List[shared.WebhookInfo]] = field(default=None)
    
