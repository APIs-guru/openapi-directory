from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'api_key' }})
    

@dataclass
class Security:
    api_key: Optional[SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
