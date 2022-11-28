from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'exp-api-key' }})
    

@dataclass
class SchemeLegacyAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'apiKey' }})
    

@dataclass
class Security:
    api_key: Optional[SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    legacy_api_key: Optional[SchemeLegacyAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
