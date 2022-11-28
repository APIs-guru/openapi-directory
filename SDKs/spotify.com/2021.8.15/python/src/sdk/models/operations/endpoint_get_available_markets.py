from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAvailableMarketsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAvailableMarketsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAvailableMarketsRequest:
    headers: EndpointGetAvailableMarketsHeaders = field()
    security: EndpointGetAvailableMarketsSecurity = field()
    

@dataclass
class EndpointGetAvailableMarketsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    markets_object: Optional[shared.MarketsObject] = field(default=None)
    
