from dataclasses import dataclass, field



@dataclass
class PostXmltojsonRequest:
    request: str = field(metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostXmltojsonResponse:
    content_type: str = field()
    status_code: int = field()
    
