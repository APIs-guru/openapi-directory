from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutGeofencesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutGeofencesIDRequest:
    path_params: PutGeofencesIDPathParams = field(default=None)
    request: shared.Geofence = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutGeofencesIDResponse:
    content_type: str = field(default=None)
    geofence: Optional[shared.Geofence] = field(default=None)
    status_code: int = field(default=None)
    
