from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowServiceInventoryPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowServiceInventoryRequest:
    path_params: ShowServiceInventoryPathParams = field(default=None)
    

@dataclass
class ShowServiceInventoryResponse:
    content_type: str = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_inventory: Optional[shared.ServiceInventory] = field(default=None)
    status_code: int = field(default=None)
    
