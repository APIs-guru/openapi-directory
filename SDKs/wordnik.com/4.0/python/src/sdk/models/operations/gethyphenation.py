from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetHyphenationPathParams:
    word: str = field(default=None, metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetHyphenationSourceDictionaryEnum(str, Enum):
    AHD = "ahd"
    CENTURY = "century"
    WIKTIONARY = "wiktionary"
    WEBSTER = "webster"
    WORDNET = "wordnet"

class GetHyphenationUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclass
class GetHyphenationQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    source_dictionary: Optional[GetHyphenationSourceDictionaryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sourceDictionary', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetHyphenationUseCanonicalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHyphenationRequest:
    path_params: GetHyphenationPathParams = field(default=None)
    query_params: GetHyphenationQueryParams = field(default=None)
    

@dataclass
class GetHyphenationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
