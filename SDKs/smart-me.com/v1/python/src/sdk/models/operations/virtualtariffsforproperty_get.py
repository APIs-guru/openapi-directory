from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class VirtualTariffsForPropertyGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualTariffsForPropertyGetRequest:
    path_params: VirtualTariffsForPropertyGetPathParams = field(default=None)
    

@dataclass
class VirtualTariffsForPropertyGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtual_tariffs_of_folders: Optional[List[shared.VirtualTariffsOfFolder]] = field(default=None)
    
