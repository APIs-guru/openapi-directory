from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class FindFormByFormNamePathParams:
    form_name: str = field(default=None, metadata={'path_param': { 'field_name': 'form_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindFormByFormNameSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FindFormByFormNameRequest:
    path_params: FindFormByFormNamePathParams = field(default=None)
    security: FindFormByFormNameSecurity = field(default=None)
    

@dataclass_json
@dataclass
class FindFormByFormName200ApplicationJSON:
    data: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass_json
@dataclass
class FindFormByFormName404ApplicationJSON:
    errors: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class FindFormByFormNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    find_form_by_form_name_200_application_json_object: Optional[FindFormByFormName200ApplicationJSON] = field(default=None)
    find_form_by_form_name_401_application_json_any: Optional[Any] = field(default=None)
    find_form_by_form_name_404_application_json_object: Optional[FindFormByFormName404ApplicationJSON] = field(default=None)
    find_form_by_form_name_429_application_json_any: Optional[Any] = field(default=None)
    
