from dataclasses import dataclass, field



@dataclass
class PostXmltojsonRequest:
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostXmltojsonResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
