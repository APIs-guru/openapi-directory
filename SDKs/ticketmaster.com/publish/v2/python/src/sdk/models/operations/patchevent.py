from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PatchEventPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchEventHeaders:
    tmps_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchEventRequest:
    path_params: PatchEventPathParams = field(default=None)
    headers: PatchEventHeaders = field(default=None)
    request: shared.AugmentationData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchEventResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
