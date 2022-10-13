from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutMaintenanceIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutMaintenanceIDRequest:
    path_params: PutMaintenanceIDPathParams = field(default=None)
    request: shared.Maintenance = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutMaintenanceIDResponse:
    content_type: str = field(default=None)
    maintenance: Optional[shared.Maintenance] = field(default=None)
    status_code: int = field(default=None)
    
