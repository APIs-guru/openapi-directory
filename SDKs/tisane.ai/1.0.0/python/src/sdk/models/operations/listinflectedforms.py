from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ListInflectedFormsQueryParams:
    family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    lexeme: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lexeme', 'style': 'form', 'explode': True }})
    

@dataclass
class ListInflectedFormsRequest:
    query_params: ListInflectedFormsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListInflectedForms200ApplicationJSONFeatures:
    index: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ListInflectedForms200ApplicationJSON:
    features: Optional[List[ListInflectedForms200ApplicationJSONFeatures]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    is_lemma: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLemma' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass
class ListInflectedFormsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_inflected_forms_200_application_json_objects: Optional[List[ListInflectedForms200ApplicationJSON]] = field(default=None)
    
