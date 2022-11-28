from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetRandomWordsSortByEnum(str, Enum):
    ALPHA = "alpha"
    COUNT = "count"

class GetRandomWordsSortOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetRandomWordsQueryParams:
    exclude_part_of_speech: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'excludePartOfSpeech', 'style': 'form', 'explode': True }})
    has_dictionary_def: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'hasDictionaryDef', 'style': 'form', 'explode': True }})
    include_part_of_speech: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includePartOfSpeech', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    max_corpus_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxCorpusCount', 'style': 'form', 'explode': True }})
    max_dictionary_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDictionaryCount', 'style': 'form', 'explode': True }})
    max_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxLength', 'style': 'form', 'explode': True }})
    min_corpus_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minCorpusCount', 'style': 'form', 'explode': True }})
    min_dictionary_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minDictionaryCount', 'style': 'form', 'explode': True }})
    min_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minLength', 'style': 'form', 'explode': True }})
    sort_by: Optional[GetRandomWordsSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetRandomWordsSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRandomWordsRequest:
    query_params: GetRandomWordsQueryParams = field()
    

@dataclass
class GetRandomWordsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
