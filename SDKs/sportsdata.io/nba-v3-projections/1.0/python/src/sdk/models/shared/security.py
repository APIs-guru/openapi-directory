from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeAPIKeyHeader:
    api_key: str = field(metadata={'security': { 'field_name': 'Ocp-Apim-Subscription-Key' }})
    

@dataclass
class SchemeAPIKeyQuery:
    api_key: str = field(metadata={'security': { 'field_name': 'key' }})
    

@dataclass
class Security:
    api_key_header: Optional[SchemeAPIKeyHeader] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    api_key_query: Optional[SchemeAPIKeyQuery] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
