from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAudioFeaturesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAudioFeaturesHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAudioFeaturesSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAudioFeaturesRequest:
    headers: EndpointGetAudioFeaturesHeaders = field()
    path_params: EndpointGetAudioFeaturesPathParams = field()
    security: EndpointGetAudioFeaturesSecurity = field()
    

@dataclass
class EndpointGetAudioFeaturesResponse:
    content_type: str = field()
    status_code: int = field()
    audio_features_object: Optional[shared.AudioFeaturesObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
