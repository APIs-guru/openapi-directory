from dataclasses import dataclass, field



@dataclass
class SchemeSpotifyAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
