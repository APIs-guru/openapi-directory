from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetQueryRelatedColumnNamePathParams:
    column_name: str = field(metadata={'path_param': { 'field_name': 'column_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueryRelatedColumnNameQueryParams:
    q: Optional[shared.GetRelatedSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetQueryRelatedColumnNameSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetQueryRelatedColumnName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetQueryRelatedColumnName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetQueryRelatedColumnName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetQueryRelatedColumnName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetQueryRelatedColumnNameRequest:
    path_params: GetQueryRelatedColumnNamePathParams = field()
    query_params: GetQueryRelatedColumnNameQueryParams = field()
    security: GetQueryRelatedColumnNameSecurity = field()
    

@dataclass
class GetQueryRelatedColumnNameResponse:
    content_type: str = field()
    status_code: int = field()
    get_query_related_column_name_400_application_json_object: Optional[GetQueryRelatedColumnName400ApplicationJSON] = field(default=None)
    get_query_related_column_name_401_application_json_object: Optional[GetQueryRelatedColumnName401ApplicationJSON] = field(default=None)
    get_query_related_column_name_404_application_json_object: Optional[GetQueryRelatedColumnName404ApplicationJSON] = field(default=None)
    get_query_related_column_name_500_application_json_object: Optional[GetQueryRelatedColumnName500ApplicationJSON] = field(default=None)
    related_response_schema: Optional[shared.RelatedResponseSchema] = field(default=None)
    
