from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListNodesSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListNodesRequest:
    security: ListNodesSecurity = field(default=None)
    

@dataclass
class ListNodesResponse:
    content_type: str = field(default=None)
    node_list_result: Optional[shared.NodeListResult] = field(default=None)
    status_code: int = field(default=None)
    
