from dataclasses import dataclass, field



@dataclass
class SchemeOauth20:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
