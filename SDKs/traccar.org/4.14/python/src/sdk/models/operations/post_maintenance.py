from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMaintenanceRequest:
    request: shared.Maintenance = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMaintenanceResponse:
    content_type: str = field(default=None)
    maintenance: Optional[shared.Maintenance] = field(default=None)
    status_code: int = field(default=None)
    
