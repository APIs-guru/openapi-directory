from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ListWordSensesQueryParams:
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    word: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'word', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWordSensesRequest:
    query_params: ListWordSensesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListWordSenses200ApplicationJSONFamilies:
    key: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    

@dataclass_json
@dataclass
class ListWordSenses200ApplicationJSONFeatures:
    index: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ListWordSenses200ApplicationJSON:
    families: Optional[List[ListWordSenses200ApplicationJSONFamilies]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'families' }})
    features: Optional[List[ListWordSenses200ApplicationJSONFeatures]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    frequency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    is_lemma: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLemma' }})
    legacy_map_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyMapId' }})
    lemma: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lemma' }})
    lexeme_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lexemeId' }})
    

@dataclass
class ListWordSensesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_word_senses_200_application_json_objects: Optional[List[ListWordSenses200ApplicationJSON]] = field(default=None)
    
