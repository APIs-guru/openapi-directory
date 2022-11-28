from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteCSSTemplateQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class DeleteCSSTemplateSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteCSSTemplate200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteCSSTemplate401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteCSSTemplate404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteCSSTemplate422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteCSSTemplate500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteCSSTemplateRequest:
    query_params: DeleteCSSTemplateQueryParams = field()
    security: DeleteCSSTemplateSecurity = field()
    

@dataclass
class DeleteCSSTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    delete_css_template_200_application_json_object: Optional[DeleteCSSTemplate200ApplicationJSON] = field(default=None)
    delete_css_template_401_application_json_object: Optional[DeleteCSSTemplate401ApplicationJSON] = field(default=None)
    delete_css_template_404_application_json_object: Optional[DeleteCSSTemplate404ApplicationJSON] = field(default=None)
    delete_css_template_422_application_json_object: Optional[DeleteCSSTemplate422ApplicationJSON] = field(default=None)
    delete_css_template_500_application_json_object: Optional[DeleteCSSTemplate500ApplicationJSON] = field(default=None)
    
