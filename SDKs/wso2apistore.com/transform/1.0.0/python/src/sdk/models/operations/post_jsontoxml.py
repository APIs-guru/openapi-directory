from dataclasses import dataclass, field



@dataclass
class PostJsontoxmlRequest:
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostJsontoxmlResponse:
    content_type: str = field()
    status_code: int = field()
    
