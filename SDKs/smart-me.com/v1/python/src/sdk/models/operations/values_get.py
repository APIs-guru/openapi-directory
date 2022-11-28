from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ValuesGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ValuesGetRequest:
    path_params: ValuesGetPathParams = field()
    

@dataclass
class ValuesGetResponse:
    content_type: str = field()
    status_code: int = field()
    values_data: Optional[shared.ValuesData] = field(default=None)
    
