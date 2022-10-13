from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StoresReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoresReadRequest:
    path_params: StoresReadPathParams = field(default=None)
    

@dataclass
class StoresReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    store_single: Optional[shared.StoreSingle] = field(default=None)
    
