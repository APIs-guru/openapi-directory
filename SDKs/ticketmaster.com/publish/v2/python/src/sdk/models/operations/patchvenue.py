from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PatchVenuePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchVenueHeaders:
    tmps_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'TMPS-Correlation-Id' }})
    

@dataclass
class PatchVenueRequest:
    path_params: PatchVenuePathParams = field(default=None)
    headers: PatchVenueHeaders = field(default=None)
    request: shared.AugmentationData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchVenueResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
