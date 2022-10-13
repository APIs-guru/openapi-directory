from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeAPIKeyHeader:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Ocp-Apim-Subscription-Key' }})
    

@dataclass
class SchemeAPIKeyQuery:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'subscription-key' }})
    

@dataclass
class SecurityOption1:
    api_key_header: SchemeAPIKeyHeader = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SecurityOption2:
    api_key_query: SchemeAPIKeyQuery = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class Security:
    option1: Optional[SecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    
