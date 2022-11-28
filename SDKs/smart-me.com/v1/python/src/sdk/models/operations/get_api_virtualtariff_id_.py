from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIVirtualTariffIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVirtualTariffIDRequest:
    path_params: GetAPIVirtualTariffIDPathParams = field()
    

@dataclass
class GetAPIVirtualTariffIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    virtual_tariffs_of_folder: Optional[shared.VirtualTariffsOfFolder] = field(default=None)
    
