from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteCSSTemplatePkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCSSTemplatePkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteCSSTemplatePkRequest:
    path_params: DeleteCSSTemplatePkPathParams = field(default=None)
    security: DeleteCSSTemplatePkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteCSSTemplatePk200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteCSSTemplatePk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteCSSTemplatePk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteCSSTemplatePk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteCSSTemplatePkResponse:
    content_type: str = field(default=None)
    delete_css_template_pk_200_application_json_object: Optional[DeleteCSSTemplatePk200ApplicationJSON] = field(default=None)
    delete_css_template_pk_404_application_json_object: Optional[DeleteCSSTemplatePk404ApplicationJSON] = field(default=None)
    delete_css_template_pk_422_application_json_object: Optional[DeleteCSSTemplatePk422ApplicationJSON] = field(default=None)
    delete_css_template_pk_500_application_json_object: Optional[DeleteCSSTemplatePk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
