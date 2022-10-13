from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ValuesGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ValuesGetRequest:
    path_params: ValuesGetPathParams = field(default=None)
    

@dataclass
class ValuesGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    values_data: Optional[shared.ValuesData] = field(default=None)
    
