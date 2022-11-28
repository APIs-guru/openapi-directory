from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeHTTPBearer:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeAccessToken:
    api_key: str = field(metadata={'security': { 'field_name': 'access-token' }})
    

@dataclass
class Security:
    access_token: Optional[SchemeAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    http_bearer: Optional[SchemeHTTPBearer] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
