from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeAdvSecurityToken:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'ADVICEment API Key' }})
    

@dataclass
class SchemeXRapidAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'RapidAPI.com API Key' }})
    

@dataclass
class SecurityOption1:
    adv_security_token: SchemeAdvSecurityToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SecurityOption2:
    x_rapid_api_key: SchemeXRapidAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class Security:
    option1: Optional[SecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    
