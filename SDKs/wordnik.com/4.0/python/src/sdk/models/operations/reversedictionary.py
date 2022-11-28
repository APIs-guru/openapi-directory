from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class ReverseDictionaryExcludeSourceDictionariesEnum(str, Enum):
    AHD = "ahd"
    CENTURY = "century"
    CMU = "cmu"
    MACMILLAN = "macmillan"
    WIKTIONARY = "wiktionary"
    WEBSTER = "webster"
    WORDNET = "wordnet"

class ReverseDictionaryIncludeSourceDictionariesEnum(str, Enum):
    AHD = "ahd"
    CENTURY = "century"
    CMU = "cmu"
    MACMILLAN = "macmillan"
    WIKTIONARY = "wiktionary"
    WEBSTER = "webster"
    WORDNET = "wordnet"

class ReverseDictionaryIncludeTagsEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"

class ReverseDictionarySortByEnum(str, Enum):
    ALPHA = "alpha"
    COUNT = "count"

class ReverseDictionarySortOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class ReverseDictionaryQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    exclude_part_of_speech: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'excludePartOfSpeech', 'style': 'form', 'explode': True }})
    exclude_source_dictionaries: Optional[ReverseDictionaryExcludeSourceDictionariesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'excludeSourceDictionaries', 'style': 'form', 'explode': True }})
    expand_terms: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expandTerms', 'style': 'form', 'explode': True }})
    find_sense_for_word: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'findSenseForWord', 'style': 'form', 'explode': True }})
    include_part_of_speech: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includePartOfSpeech', 'style': 'form', 'explode': True }})
    include_source_dictionaries: Optional[ReverseDictionaryIncludeSourceDictionariesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'includeSourceDictionaries', 'style': 'form', 'explode': True }})
    include_tags: Optional[ReverseDictionaryIncludeTagsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'includeTags', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    max_corpus_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxCorpusCount', 'style': 'form', 'explode': True }})
    max_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxLength', 'style': 'form', 'explode': True }})
    min_corpus_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minCorpusCount', 'style': 'form', 'explode': True }})
    min_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minLength', 'style': 'form', 'explode': True }})
    skip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    sort_by: Optional[ReverseDictionarySortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[ReverseDictionarySortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclass
class ReverseDictionaryRequest:
    query_params: ReverseDictionaryQueryParams = field()
    

@dataclass
class ReverseDictionaryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
