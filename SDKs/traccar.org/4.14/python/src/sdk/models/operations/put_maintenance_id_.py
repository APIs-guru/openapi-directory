from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutMaintenanceIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutMaintenanceIDRequest:
    path_params: PutMaintenanceIDPathParams = field()
    request: shared.Maintenance = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutMaintenanceIDResponse:
    content_type: str = field()
    status_code: int = field()
    maintenance: Optional[shared.Maintenance] = field(default=None)
    
