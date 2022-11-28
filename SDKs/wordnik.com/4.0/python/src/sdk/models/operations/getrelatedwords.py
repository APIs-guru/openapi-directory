from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class GetRelatedWordsPathParams:
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetRelatedWordsRelationshipTypesEnum(str, Enum):
    SYNONYM = "synonym"
    ANTONYM = "antonym"
    VARIANT = "variant"
    EQUIVALENT = "equivalent"
    CROSS_REFERENCE = "cross-reference"
    RELATED_WORD = "related-word"
    RHYME = "rhyme"
    FORM = "form"
    ETYMOLOGICALLY_RELATED_TERM = "etymologically-related-term"
    HYPERNYM = "hypernym"
    HYPONYM = "hyponym"
    INFLECTED_FORM = "inflected-form"
    PRIMARY = "primary"
    SAME_CONTEXT = "same-context"
    VERB_FORM = "verb-form"
    VERB_STEM = "verb-stem"
    HAS_TOPIC = "has_topic"

class GetRelatedWordsUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclass
class GetRelatedWordsQueryParams:
    limit_per_relationship_type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limitPerRelationshipType', 'style': 'form', 'explode': True }})
    relationship_types: Optional[GetRelatedWordsRelationshipTypesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'relationshipTypes', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetRelatedWordsUseCanonicalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRelatedWordsRequest:
    path_params: GetRelatedWordsPathParams = field()
    query_params: GetRelatedWordsQueryParams = field()
    

@dataclass
class GetRelatedWordsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
