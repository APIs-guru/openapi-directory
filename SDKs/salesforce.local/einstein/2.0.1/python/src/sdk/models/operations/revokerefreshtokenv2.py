from dataclasses import dataclass, field



@dataclass
class RevokeRefreshTokenV2PathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeRefreshTokenV2Security:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RevokeRefreshTokenV2Request:
    path_params: RevokeRefreshTokenV2PathParams = field(default=None)
    security: RevokeRefreshTokenV2Security = field(default=None)
    

@dataclass
class RevokeRefreshTokenV2Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
