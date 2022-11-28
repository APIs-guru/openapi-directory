from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetCSSTemplatePkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCSSTemplatePkQueryParams:
    q: Optional[shared.GetItemSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetCSSTemplatePkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetCSSTemplatePk200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetCSSTemplatePk200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetCSSTemplatePk200ApplicationJSON:
    description_columns: Optional[GetCSSTemplatePk200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_columns') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label_columns: Optional[GetCSSTemplatePk200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_columns') }})
    result: Optional[shared.CSSTemplateRestAPIGet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    show_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_columns') }})
    show_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_title') }})
    

@dataclass_json
@dataclass
class GetCSSTemplatePk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetCSSTemplatePk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetCSSTemplatePk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetCSSTemplatePk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetCSSTemplatePk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetCSSTemplatePkRequest:
    path_params: GetCSSTemplatePkPathParams = field()
    query_params: GetCSSTemplatePkQueryParams = field()
    security: GetCSSTemplatePkSecurity = field()
    

@dataclass
class GetCSSTemplatePkResponse:
    content_type: str = field()
    status_code: int = field()
    get_css_template_pk_200_application_json_object: Optional[GetCSSTemplatePk200ApplicationJSON] = field(default=None)
    get_css_template_pk_400_application_json_object: Optional[GetCSSTemplatePk400ApplicationJSON] = field(default=None)
    get_css_template_pk_401_application_json_object: Optional[GetCSSTemplatePk401ApplicationJSON] = field(default=None)
    get_css_template_pk_404_application_json_object: Optional[GetCSSTemplatePk404ApplicationJSON] = field(default=None)
    get_css_template_pk_422_application_json_object: Optional[GetCSSTemplatePk422ApplicationJSON] = field(default=None)
    get_css_template_pk_500_application_json_object: Optional[GetCSSTemplatePk500ApplicationJSON] = field(default=None)
    
