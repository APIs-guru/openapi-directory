from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListVcentersSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListVcentersRequest:
    security: ListVcentersSecurity = field(default=None)
    

@dataclass
class ListVcentersResponse:
    content_type: str = field(default=None)
    data_source_list_response: Optional[shared.DataSourceListResponse] = field(default=None)
    status_code: int = field(default=None)
    
