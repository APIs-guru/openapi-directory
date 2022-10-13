from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetTextPronunciationsPathParams:
    word: str = field(default=None, metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetTextPronunciationsSourceDictionaryEnum(str, Enum):
    AHD = "ahd"
    CENTURY = "century"
    CMU = "cmu"
    MACMILLAN = "macmillan"
    WIKTIONARY = "wiktionary"
    WEBSTER = "webster"
    WORDNET = "wordnet"

class GetTextPronunciationsTypeFormatEnum(str, Enum):
    AHD = "ahd"
    ARPABET = "arpabet"
    GCIDE_DIACRITICAL = "gcide-diacritical"
    IPA = "IPA"

class GetTextPronunciationsUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclass
class GetTextPronunciationsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    source_dictionary: Optional[GetTextPronunciationsSourceDictionaryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sourceDictionary', 'style': 'form', 'explode': True }})
    type_format: Optional[GetTextPronunciationsTypeFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'typeFormat', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetTextPronunciationsUseCanonicalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTextPronunciationsRequest:
    path_params: GetTextPronunciationsPathParams = field(default=None)
    query_params: GetTextPronunciationsQueryParams = field(default=None)
    

@dataclass
class GetTextPronunciationsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
