from dataclasses import dataclass, field
from typing import Optional


@dataclass
class VoiceQueryParams:
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    text: str = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    to: str = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    xml: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'xml', 'style': 'form', 'explode': True }})
    

@dataclass
class VoiceRequest:
    query_params: VoiceQueryParams = field(default=None)
    

@dataclass
class VoiceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
