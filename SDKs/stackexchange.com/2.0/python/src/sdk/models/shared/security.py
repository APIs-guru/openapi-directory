from dataclasses import dataclass, field



@dataclass
class SchemeOauth20:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
