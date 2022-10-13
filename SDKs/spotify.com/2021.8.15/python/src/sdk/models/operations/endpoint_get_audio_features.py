from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAudioFeaturesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAudioFeaturesHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointGetAudioFeaturesSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAudioFeaturesRequest:
    path_params: EndpointGetAudioFeaturesPathParams = field(default=None)
    headers: EndpointGetAudioFeaturesHeaders = field(default=None)
    security: EndpointGetAudioFeaturesSecurity = field(default=None)
    

@dataclass
class EndpointGetAudioFeaturesResponse:
    audio_features_object: Optional[shared.AudioFeaturesObject] = field(default=None)
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
