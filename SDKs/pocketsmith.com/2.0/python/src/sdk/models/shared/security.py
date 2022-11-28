from dataclasses import dataclass, field



@dataclass
class SchemeDeveloperKey:
    api_key: str = field(metadata={'security': { 'field_name': 'X-Developer-Key' }})
    

@dataclass
class Security:
    developer_key: SchemeDeveloperKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SchemeOauth2:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
