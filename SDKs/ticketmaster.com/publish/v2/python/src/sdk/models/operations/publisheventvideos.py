from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PublishEventVideosPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishEventVideosHeaders:
    tmps_correlation_id: str = field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishEventVideosRequest:
    headers: PublishEventVideosHeaders = field()
    path_params: PublishEventVideosPathParams = field()
    request: shared.Video = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishEventVideosResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
