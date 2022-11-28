from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListUcsManagersSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListUcsManagersRequest:
    security: ListUcsManagersSecurity = field()
    

@dataclass
class ListUcsManagersResponse:
    content_type: str = field()
    status_code: int = field()
    data_source_list_response: Optional[shared.DataSourceListResponse] = field(default=None)
    
