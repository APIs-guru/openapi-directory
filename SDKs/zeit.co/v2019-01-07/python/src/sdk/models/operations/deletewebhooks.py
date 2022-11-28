from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteWebhooksQueryParams:
    team_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'teamId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteWebhooksRequest:
    query_params: DeleteWebhooksQueryParams = field()
    

@dataclass
class DeleteWebhooksResponse:
    content_type: str = field()
    status_code: int = field()
    
