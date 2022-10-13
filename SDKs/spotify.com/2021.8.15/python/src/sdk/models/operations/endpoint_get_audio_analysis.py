from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAudioAnalysisPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAudioAnalysisHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointGetAudioAnalysisSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAudioAnalysisRequest:
    path_params: EndpointGetAudioAnalysisPathParams = field(default=None)
    headers: EndpointGetAudioAnalysisHeaders = field(default=None)
    security: EndpointGetAudioAnalysisSecurity = field(default=None)
    

@dataclass
class EndpointGetAudioAnalysisResponse:
    audio_analysis_object: Optional[shared.AudioAnalysisObject] = field(default=None)
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
