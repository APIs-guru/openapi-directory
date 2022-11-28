from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetSeveralAudioFeaturesQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetSeveralAudioFeaturesHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetSeveralAudioFeaturesSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetSeveralAudioFeaturesRequest:
    headers: EndpointGetSeveralAudioFeaturesHeaders = field()
    query_params: EndpointGetSeveralAudioFeaturesQueryParams = field()
    security: EndpointGetSeveralAudioFeaturesSecurity = field()
    

@dataclass
class EndpointGetSeveralAudioFeaturesResponse:
    content_type: str = field()
    status_code: int = field()
    audio_features_array_object: Optional[shared.AudioFeaturesArrayObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
