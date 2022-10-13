from dataclasses import dataclass, field



@dataclass
class SchemeOauth2:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeOauth2ClientSecret:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
