from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'app_key' }})
    

@dataclass
class SchemeAppID:
    api_key: str = field(metadata={'security': { 'field_name': 'app_id' }})
    
