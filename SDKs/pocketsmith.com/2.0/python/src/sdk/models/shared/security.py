from dataclasses import dataclass, field



@dataclass
class SchemeDeveloperKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'X-Developer-Key' }})
    

@dataclass
class SchemeOauth2:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    developer_key: SchemeDeveloperKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
