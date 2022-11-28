from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetCSSTemplateInfoQueryParams:
    q: Optional[shared.GetInfoSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetCSSTemplateInfoSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetCSSTemplateInfo200ApplicationJSONFiltersColumnName:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    

@dataclass_json
@dataclass
class GetCSSTemplateInfo200ApplicationJSONFilters:
    column_name: Optional[List[GetCSSTemplateInfo200ApplicationJSONFiltersColumnName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetCSSTemplateInfo200ApplicationJSON:
    add_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_columns') }})
    edit_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edit_columns') }})
    filters: Optional[GetCSSTemplateInfo200ApplicationJSONFilters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclass_json
@dataclass
class GetCSSTemplateInfo400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetCSSTemplateInfo401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetCSSTemplateInfo422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetCSSTemplateInfo500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetCSSTemplateInfoRequest:
    query_params: GetCSSTemplateInfoQueryParams = field()
    security: GetCSSTemplateInfoSecurity = field()
    

@dataclass
class GetCSSTemplateInfoResponse:
    content_type: str = field()
    status_code: int = field()
    get_css_template_info_200_application_json_object: Optional[GetCSSTemplateInfo200ApplicationJSON] = field(default=None)
    get_css_template_info_400_application_json_object: Optional[GetCSSTemplateInfo400ApplicationJSON] = field(default=None)
    get_css_template_info_401_application_json_object: Optional[GetCSSTemplateInfo401ApplicationJSON] = field(default=None)
    get_css_template_info_422_application_json_object: Optional[GetCSSTemplateInfo422ApplicationJSON] = field(default=None)
    get_css_template_info_500_application_json_object: Optional[GetCSSTemplateInfo500ApplicationJSON] = field(default=None)
    
