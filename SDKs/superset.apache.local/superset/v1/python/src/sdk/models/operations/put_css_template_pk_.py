from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutCSSTemplatePkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCSSTemplatePkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PutCSSTemplatePk200ApplicationJSON:
    result: Optional[shared.CSSTemplateRestAPIPut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class PutCSSTemplatePk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutCSSTemplatePk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutCSSTemplatePk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutCSSTemplatePk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutCSSTemplatePk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PutCSSTemplatePkRequest:
    path_params: PutCSSTemplatePkPathParams = field()
    request: shared.CSSTemplateRestAPIPut = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutCSSTemplatePkSecurity = field()
    

@dataclass
class PutCSSTemplatePkResponse:
    content_type: str = field()
    status_code: int = field()
    put_css_template_pk_200_application_json_object: Optional[PutCSSTemplatePk200ApplicationJSON] = field(default=None)
    put_css_template_pk_400_application_json_object: Optional[PutCSSTemplatePk400ApplicationJSON] = field(default=None)
    put_css_template_pk_401_application_json_object: Optional[PutCSSTemplatePk401ApplicationJSON] = field(default=None)
    put_css_template_pk_404_application_json_object: Optional[PutCSSTemplatePk404ApplicationJSON] = field(default=None)
    put_css_template_pk_422_application_json_object: Optional[PutCSSTemplatePk422ApplicationJSON] = field(default=None)
    put_css_template_pk_500_application_json_object: Optional[PutCSSTemplatePk500ApplicationJSON] = field(default=None)
    
