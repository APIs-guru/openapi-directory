from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ListInflectedFormsQueryParams:
    family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    lexeme: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lexeme', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ListInflectedForms200ApplicationJSONFeatures:
    index: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ListInflectedForms200ApplicationJSON:
    features: Optional[List[ListInflectedForms200ApplicationJSONFeatures]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    is_lemma: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLemma') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass
class ListInflectedFormsRequest:
    query_params: ListInflectedFormsQueryParams = field()
    

@dataclass
class ListInflectedFormsResponse:
    content_type: str = field()
    status_code: int = field()
    list_inflected_forms_200_application_json_objects: Optional[List[ListInflectedForms200ApplicationJSON]] = field(default=None)
    
