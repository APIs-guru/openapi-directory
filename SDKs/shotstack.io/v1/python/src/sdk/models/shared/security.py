from dataclasses import dataclass, field



@dataclass
class SchemeDeveloperKey:
    api_key: str = field(metadata={'security': { 'field_name': 'x-api-key' }})
    
