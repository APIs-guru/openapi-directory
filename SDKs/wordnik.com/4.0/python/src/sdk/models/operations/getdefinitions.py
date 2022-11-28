from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum


@dataclass
class GetDefinitionsPathParams:
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetDefinitionsIncludeTagsEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"

class GetDefinitionsPartOfSpeechEnum(str, Enum):
    NOUN = "noun"
    ADJECTIVE = "adjective"
    VERB = "verb"
    ADVERB = "adverb"
    INTERJECTION = "interjection"
    PRONOUN = "pronoun"
    PREPOSITION = "preposition"
    ABBREVIATION = "abbreviation"
    AFFIX = "affix"
    ARTICLE = "article"
    AUXILIARY_VERB = "auxiliary-verb"
    CONJUNCTION = "conjunction"
    DEFINITE_ARTICLE = "definite-article"
    FAMILY_NAME = "family-name"
    GIVEN_NAME = "given-name"
    IDIOM = "idiom"
    IMPERATIVE = "imperative"
    NOUN_PLURAL = "noun-plural"
    NOUN_POSESSIVE = "noun-posessive"
    PAST_PARTICIPLE = "past-participle"
    PHRASAL_PREFIX = "phrasal-prefix"
    PROPER_NOUN = "proper-noun"
    PROPER_NOUN_PLURAL = "proper-noun-plural"
    PROPER_NOUN_POSESSIVE = "proper-noun-posessive"
    SUFFIX = "suffix"
    VERB_INTRANSITIVE = "verb-intransitive"
    VERB_TRANSITIVE = "verb-transitive"

class GetDefinitionsUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclass
class GetDefinitionsQueryParams:
    include_related: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeRelated', 'style': 'form', 'explode': True }})
    include_tags: Optional[GetDefinitionsIncludeTagsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'includeTags', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    part_of_speech: Optional[GetDefinitionsPartOfSpeechEnum] = field(default=None, metadata={'query_param': { 'field_name': 'partOfSpeech', 'style': 'form', 'explode': True }})
    source_dictionaries: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sourceDictionaries', 'style': 'form', 'explode': False }})
    use_canonical: Optional[GetDefinitionsUseCanonicalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDefinitionsRequest:
    path_params: GetDefinitionsPathParams = field()
    query_params: GetDefinitionsQueryParams = field()
    

@dataclass
class GetDefinitionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
