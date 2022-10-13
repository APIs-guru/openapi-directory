from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutCSSTemplatePkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCSSTemplatePkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PutCSSTemplatePkRequest:
    path_params: PutCSSTemplatePkPathParams = field(default=None)
    request: shared.CSSTemplateRestAPIPut = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutCSSTemplatePkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PutCSSTemplatePk200ApplicationJSON:
    result: Optional[shared.CSSTemplateRestAPIPut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PutCSSTemplatePk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutCSSTemplatePk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutCSSTemplatePk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutCSSTemplatePk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutCSSTemplatePk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PutCSSTemplatePkResponse:
    content_type: str = field(default=None)
    put_css_template_pk_200_application_json_object: Optional[PutCSSTemplatePk200ApplicationJSON] = field(default=None)
    put_css_template_pk_400_application_json_object: Optional[PutCSSTemplatePk400ApplicationJSON] = field(default=None)
    put_css_template_pk_401_application_json_object: Optional[PutCSSTemplatePk401ApplicationJSON] = field(default=None)
    put_css_template_pk_404_application_json_object: Optional[PutCSSTemplatePk404ApplicationJSON] = field(default=None)
    put_css_template_pk_422_application_json_object: Optional[PutCSSTemplatePk422ApplicationJSON] = field(default=None)
    put_css_template_pk_500_application_json_object: Optional[PutCSSTemplatePk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
