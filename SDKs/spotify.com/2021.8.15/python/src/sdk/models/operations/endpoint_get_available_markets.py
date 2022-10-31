from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAvailableMarketsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAvailableMarketsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAvailableMarketsRequest:
    headers: EndpointGetAvailableMarketsHeaders = field(default=None)
    security: EndpointGetAvailableMarketsSecurity = field(default=None)
    

@dataclass
class EndpointGetAvailableMarketsResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    markets_object: Optional[shared.MarketsObject] = field(default=None)
    status_code: int = field(default=None)
    
