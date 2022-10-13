from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeletePermissionsRequest:
    request: shared.Permission = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeletePermissionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
