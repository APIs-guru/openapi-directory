from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class FindFormByFormNamePathParams:
    form_name: str = field(metadata={'path_param': { 'field_name': 'form_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindFormByFormNameSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class FindFormByFormName200ApplicationJSON:
    data: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class FindFormByFormName404ApplicationJSON:
    errors: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class FindFormByFormNameRequest:
    path_params: FindFormByFormNamePathParams = field()
    security: FindFormByFormNameSecurity = field()
    

@dataclass
class FindFormByFormNameResponse:
    content_type: str = field()
    status_code: int = field()
    find_form_by_form_name_200_application_json_object: Optional[FindFormByFormName200ApplicationJSON] = field(default=None)
    find_form_by_form_name_401_application_json_any: Optional[Any] = field(default=None)
    find_form_by_form_name_404_application_json_object: Optional[FindFormByFormName404ApplicationJSON] = field(default=None)
    find_form_by_form_name_429_application_json_any: Optional[Any] = field(default=None)
    
