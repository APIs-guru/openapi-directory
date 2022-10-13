from dataclasses import dataclass, field



@dataclass
class SchemeAccountSidAuthToken:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
