from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeBasicAuth:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    

@dataclass
class SchemeOAuth2:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    basic_auth: Optional[SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    o_auth2: Optional[SchemeOAuth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SchemeOpenIDConnect:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
