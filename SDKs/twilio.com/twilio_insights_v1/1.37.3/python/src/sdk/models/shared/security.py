from dataclasses import dataclass, field



@dataclass
class SchemeAccountSidAuthToken:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    
