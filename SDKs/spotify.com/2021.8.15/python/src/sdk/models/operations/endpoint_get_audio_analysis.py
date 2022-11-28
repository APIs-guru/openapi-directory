from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAudioAnalysisPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAudioAnalysisHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAudioAnalysisSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAudioAnalysisRequest:
    headers: EndpointGetAudioAnalysisHeaders = field()
    path_params: EndpointGetAudioAnalysisPathParams = field()
    security: EndpointGetAudioAnalysisSecurity = field()
    

@dataclass
class EndpointGetAudioAnalysisResponse:
    content_type: str = field()
    status_code: int = field()
    audio_analysis_object: Optional[shared.AudioAnalysisObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
