from dataclasses import dataclass, field
from typing import Optional


@dataclass
class VoiceQueryParams:
    text: str = field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    to: str = field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    xml: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'xml', 'style': 'form', 'explode': True }})
    

@dataclass
class VoiceRequest:
    query_params: VoiceQueryParams = field()
    

@dataclass
class VoiceResponse:
    content_type: str = field()
    status_code: int = field()
    voice_200_text_plain_string: Optional[str] = field(default=None)
    
