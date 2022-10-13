from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PublishAttractionVideosPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishAttractionVideosHeaders:
    tmps_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'TMPS-Correlation-Id' }})
    

@dataclass
class PublishAttractionVideosRequest:
    path_params: PublishAttractionVideosPathParams = field(default=None)
    headers: PublishAttractionVideosHeaders = field(default=None)
    request: shared.Video = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishAttractionVideosResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
