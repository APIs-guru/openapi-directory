from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ListWebhooksV1QueryParams:
    payor_id: str = field(metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWebhooksV1Request:
    query_params: ListWebhooksV1QueryParams = field()
    

@dataclass
class ListWebhooksV1Response:
    content_type: str = field()
    status_code: int = field()
    webhooks_response: Optional[shared.WebhooksResponse] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
