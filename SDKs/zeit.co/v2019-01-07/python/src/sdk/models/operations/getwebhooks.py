from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetWebhooksQueryParams:
    team_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'teamId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWebhooksRequest:
    query_params: GetWebhooksQueryParams = field(default=None)
    

@dataclass
class GetWebhooksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhooks: Optional[List[Any]] = field(default=None)
    
