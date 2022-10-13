from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetCSSTemplateRelatedColumnNamePathParams:
    column_name: str = field(default=None, metadata={'path_param': { 'field_name': 'column_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCSSTemplateRelatedColumnNameQueryParams:
    q: Optional[shared.GetRelatedSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetCSSTemplateRelatedColumnNameSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetCSSTemplateRelatedColumnNameRequest:
    path_params: GetCSSTemplateRelatedColumnNamePathParams = field(default=None)
    query_params: GetCSSTemplateRelatedColumnNameQueryParams = field(default=None)
    security: GetCSSTemplateRelatedColumnNameSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetCSSTemplateRelatedColumnName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetCSSTemplateRelatedColumnName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetCSSTemplateRelatedColumnName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetCSSTemplateRelatedColumnName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetCSSTemplateRelatedColumnNameResponse:
    content_type: str = field(default=None)
    get_css_template_related_column_name_400_application_json_object: Optional[GetCSSTemplateRelatedColumnName400ApplicationJSON] = field(default=None)
    get_css_template_related_column_name_401_application_json_object: Optional[GetCSSTemplateRelatedColumnName401ApplicationJSON] = field(default=None)
    get_css_template_related_column_name_404_application_json_object: Optional[GetCSSTemplateRelatedColumnName404ApplicationJSON] = field(default=None)
    get_css_template_related_column_name_500_application_json_object: Optional[GetCSSTemplateRelatedColumnName500ApplicationJSON] = field(default=None)
    related_response_schema: Optional[shared.RelatedResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
