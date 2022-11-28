from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class FindFormsQueryParams:
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class FindFormsSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class FindForms200ApplicationJSON:
    data: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class FindFormsRequest:
    query_params: FindFormsQueryParams = field()
    security: FindFormsSecurity = field()
    

@dataclass
class FindFormsResponse:
    content_type: str = field()
    status_code: int = field()
    find_forms_200_application_json_object: Optional[FindForms200ApplicationJSON] = field(default=None)
    find_forms_401_application_json_any: Optional[Any] = field(default=None)
    find_forms_429_application_json_any: Optional[Any] = field(default=None)
    
