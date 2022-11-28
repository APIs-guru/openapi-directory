from dataclasses import dataclass, field



@dataclass
class SchemeSpotifyAuth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
