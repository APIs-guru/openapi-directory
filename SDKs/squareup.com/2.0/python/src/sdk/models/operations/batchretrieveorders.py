from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BatchRetrieveOrdersSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BatchRetrieveOrdersRequest:
    request: shared.BatchRetrieveOrdersRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BatchRetrieveOrdersSecurity = field(default=None)
    

@dataclass
class BatchRetrieveOrdersResponse:
    batch_retrieve_orders_response: Optional[shared.BatchRetrieveOrdersResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
