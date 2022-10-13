from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListAristaSwitchesSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListAristaSwitchesRequest:
    security: ListAristaSwitchesSecurity = field(default=None)
    

@dataclass
class ListAristaSwitchesResponse:
    content_type: str = field(default=None)
    data_source_list_response: Optional[shared.DataSourceListResponse] = field(default=None)
    status_code: int = field(default=None)
    
