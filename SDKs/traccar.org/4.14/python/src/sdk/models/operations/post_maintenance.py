from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMaintenanceRequest:
    request: shared.Maintenance = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMaintenanceResponse:
    content_type: str = field()
    status_code: int = field()
    maintenance: Optional[shared.Maintenance] = field(default=None)
    
