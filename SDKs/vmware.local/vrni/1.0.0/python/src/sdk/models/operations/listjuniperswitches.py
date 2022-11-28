from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListJuniperSwitchesSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListJuniperSwitchesRequest:
    security: ListJuniperSwitchesSecurity = field()
    

@dataclass
class ListJuniperSwitchesResponse:
    content_type: str = field()
    status_code: int = field()
    data_source_list_response: Optional[shared.DataSourceListResponse] = field(default=None)
    
