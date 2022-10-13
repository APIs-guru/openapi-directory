from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRandomWordQueryParams:
    exclude_part_of_speech: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'excludePartOfSpeech', 'style': 'form', 'explode': True }})
    has_dictionary_def: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'hasDictionaryDef', 'style': 'form', 'explode': True }})
    include_part_of_speech: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includePartOfSpeech', 'style': 'form', 'explode': True }})
    max_corpus_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxCorpusCount', 'style': 'form', 'explode': True }})
    max_dictionary_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDictionaryCount', 'style': 'form', 'explode': True }})
    max_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxLength', 'style': 'form', 'explode': True }})
    min_corpus_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minCorpusCount', 'style': 'form', 'explode': True }})
    min_dictionary_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minDictionaryCount', 'style': 'form', 'explode': True }})
    min_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minLength', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRandomWordRequest:
    query_params: GetRandomWordQueryParams = field(default=None)
    

@dataclass
class GetRandomWordResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
