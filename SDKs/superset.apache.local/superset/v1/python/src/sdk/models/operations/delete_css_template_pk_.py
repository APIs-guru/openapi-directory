from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteCSSTemplatePkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCSSTemplatePkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteCSSTemplatePk200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteCSSTemplatePk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteCSSTemplatePk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteCSSTemplatePk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteCSSTemplatePkRequest:
    path_params: DeleteCSSTemplatePkPathParams = field()
    security: DeleteCSSTemplatePkSecurity = field()
    

@dataclass
class DeleteCSSTemplatePkResponse:
    content_type: str = field()
    status_code: int = field()
    delete_css_template_pk_200_application_json_object: Optional[DeleteCSSTemplatePk200ApplicationJSON] = field(default=None)
    delete_css_template_pk_404_application_json_object: Optional[DeleteCSSTemplatePk404ApplicationJSON] = field(default=None)
    delete_css_template_pk_422_application_json_object: Optional[DeleteCSSTemplatePk422ApplicationJSON] = field(default=None)
    delete_css_template_pk_500_application_json_object: Optional[DeleteCSSTemplatePk500ApplicationJSON] = field(default=None)
    
