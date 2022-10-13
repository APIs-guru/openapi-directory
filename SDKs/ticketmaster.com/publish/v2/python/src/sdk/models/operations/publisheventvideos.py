from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PublishEventVideosPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishEventVideosHeaders:
    tmps_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'TMPS-Correlation-Id' }})
    

@dataclass
class PublishEventVideosRequest:
    path_params: PublishEventVideosPathParams = field(default=None)
    headers: PublishEventVideosHeaders = field(default=None)
    request: shared.Video = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishEventVideosResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
