from dataclasses import dataclass, field



@dataclass
class PostJsontoxmlRequest:
    request: str = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostJsontoxmlResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
