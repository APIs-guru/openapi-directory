from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeAdvSecurityToken:
    api_key: str = field(metadata={'security': { 'field_name': 'ADVICEment API Key' }})
    

@dataclass
class SchemeXRapidAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'RapidAPI.com API Key' }})
    

@dataclass
class Security:
    adv_security_token: Optional[SchemeAdvSecurityToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    x_rapid_api_key: Optional[SchemeXRapidAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
