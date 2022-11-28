from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RevokeRefreshTokenV2PathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeRefreshTokenV2Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RevokeRefreshTokenV2Request:
    path_params: RevokeRefreshTokenV2PathParams = field()
    security: RevokeRefreshTokenV2Security = field()
    

@dataclass
class RevokeRefreshTokenV2Response:
    content_type: str = field()
    status_code: int = field()
    
