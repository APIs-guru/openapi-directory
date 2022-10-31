from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetSeveralAudioFeaturesQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetSeveralAudioFeaturesHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetSeveralAudioFeaturesSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetSeveralAudioFeaturesRequest:
    query_params: EndpointGetSeveralAudioFeaturesQueryParams = field(default=None)
    headers: EndpointGetSeveralAudioFeaturesHeaders = field(default=None)
    security: EndpointGetSeveralAudioFeaturesSecurity = field(default=None)
    

@dataclass
class EndpointGetSeveralAudioFeaturesResponse:
    audio_features_array_object: Optional[shared.AudioFeaturesArrayObject] = field(default=None)
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
