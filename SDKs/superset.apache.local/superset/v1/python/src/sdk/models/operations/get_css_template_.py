from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetCSSTemplateQueryParams:
    q: Optional[shared.GetListSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetCSSTemplateSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetCSSTemplate200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetCSSTemplate200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetCSSTemplate200ApplicationJSON:
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    description_columns: Optional[GetCSSTemplate200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_columns') }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    label_columns: Optional[GetCSSTemplate200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_columns') }})
    list_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_columns') }})
    list_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_title') }})
    order_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_columns') }})
    result: Optional[List[shared.CSSTemplateRestAPIGetList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class GetCSSTemplate400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetCSSTemplate401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetCSSTemplate422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetCSSTemplate500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetCSSTemplateRequest:
    query_params: GetCSSTemplateQueryParams = field()
    security: GetCSSTemplateSecurity = field()
    

@dataclass
class GetCSSTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    get_css_template_200_application_json_object: Optional[GetCSSTemplate200ApplicationJSON] = field(default=None)
    get_css_template_400_application_json_object: Optional[GetCSSTemplate400ApplicationJSON] = field(default=None)
    get_css_template_401_application_json_object: Optional[GetCSSTemplate401ApplicationJSON] = field(default=None)
    get_css_template_422_application_json_object: Optional[GetCSSTemplate422ApplicationJSON] = field(default=None)
    get_css_template_500_application_json_object: Optional[GetCSSTemplate500ApplicationJSON] = field(default=None)
    
