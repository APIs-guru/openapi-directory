from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class GetAudioPathParams:
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetAudioUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclass
class GetAudioQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetAudioUseCanonicalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAudioRequest:
    path_params: GetAudioPathParams = field()
    query_params: GetAudioQueryParams = field()
    

@dataclass
class GetAudioResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
