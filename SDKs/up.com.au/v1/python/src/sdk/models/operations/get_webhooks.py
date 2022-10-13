from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetWebhooksQueryParams:
    page_size_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWebhooksRequest:
    query_params: GetWebhooksQueryParams = field(default=None)
    

@dataclass
class GetWebhooksResponse:
    content_type: str = field(default=None)
    list_webhooks_response: Optional[shared.ListWebhooksResponse] = field(default=None)
    status_code: int = field(default=None)
    
