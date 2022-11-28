from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListNodesSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListNodesRequest:
    security: ListNodesSecurity = field()
    

@dataclass
class ListNodesResponse:
    content_type: str = field()
    status_code: int = field()
    node_list_result: Optional[shared.NodeListResult] = field(default=None)
    
