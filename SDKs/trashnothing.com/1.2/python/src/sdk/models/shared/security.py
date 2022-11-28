from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeOauth2Implicit:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeOauth2Code:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    oauth2_code: Optional[SchemeOauth2Code] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_implicit: Optional[SchemeOauth2Implicit] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'api_key' }})
    
