from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class FindFormsQueryParams:
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class FindFormsSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FindFormsRequest:
    query_params: FindFormsQueryParams = field(default=None)
    security: FindFormsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class FindForms200ApplicationJSON:
    data: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class FindFormsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    find_forms_200_application_json_object: Optional[FindForms200ApplicationJSON] = field(default=None)
    find_forms_401_application_json_any: Optional[Any] = field(default=None)
    find_forms_429_application_json_any: Optional[Any] = field(default=None)
    
