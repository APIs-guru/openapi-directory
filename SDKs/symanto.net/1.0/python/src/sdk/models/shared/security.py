from dataclasses import dataclass, field



@dataclass
class SchemeAPIKeyHeader:
    api_key: str = field(metadata={'security': { 'field_name': 'x-api-key' }})
    

@dataclass
class Security:
    api_key_header: SchemeAPIKeyHeader = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
