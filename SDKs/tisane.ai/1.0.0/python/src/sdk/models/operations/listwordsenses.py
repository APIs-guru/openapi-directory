from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ListWordSensesQueryParams:
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    word: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'word', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ListWordSenses200ApplicationJSONFamilies:
    key: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    

@dataclass_json
@dataclass
class ListWordSenses200ApplicationJSONFeatures:
    index: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ListWordSenses200ApplicationJSON:
    families: Optional[List[ListWordSenses200ApplicationJSONFamilies]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('families') }})
    features: Optional[List[ListWordSenses200ApplicationJSONFeatures]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    frequency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    is_lemma: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLemma') }})
    legacy_map_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyMapId') }})
    lemma: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lemma') }})
    lexeme_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lexemeId') }})
    

@dataclass
class ListWordSensesRequest:
    query_params: ListWordSensesQueryParams = field()
    

@dataclass
class ListWordSensesResponse:
    content_type: str = field()
    status_code: int = field()
    list_word_senses_200_application_json_objects: Optional[List[ListWordSenses200ApplicationJSON]] = field(default=None)
    
