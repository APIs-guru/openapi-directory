from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StoresReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoresReadRequest:
    path_params: StoresReadPathParams = field()
    

@dataclass
class StoresReadResponse:
    content_type: str = field()
    status_code: int = field()
    store_single: Optional[shared.StoreSingle] = field(default=None)
    
