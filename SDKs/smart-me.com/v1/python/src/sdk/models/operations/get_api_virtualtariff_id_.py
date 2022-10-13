from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIVirtualTariffIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVirtualTariffIDRequest:
    path_params: GetAPIVirtualTariffIDPathParams = field(default=None)
    

@dataclass
class GetAPIVirtualTariffIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtual_tariffs_of_folder: Optional[shared.VirtualTariffsOfFolder] = field(default=None)
    
