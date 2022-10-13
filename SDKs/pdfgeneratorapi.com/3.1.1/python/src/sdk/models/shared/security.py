from dataclasses import dataclass, field



@dataclass
class SchemeJSONWebTokenAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    json_web_token_auth: SchemeJSONWebTokenAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
