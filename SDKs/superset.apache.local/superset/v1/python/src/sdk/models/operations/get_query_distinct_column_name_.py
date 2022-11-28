from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetQueryDistinctColumnNamePathParams:
    column_name: str = field(metadata={'path_param': { 'field_name': 'column_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueryDistinctColumnNameQueryParams:
    q: Optional[shared.GetRelatedSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetQueryDistinctColumnNameSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetQueryDistinctColumnName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetQueryDistinctColumnName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetQueryDistinctColumnName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetQueryDistinctColumnName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetQueryDistinctColumnNameRequest:
    path_params: GetQueryDistinctColumnNamePathParams = field()
    query_params: GetQueryDistinctColumnNameQueryParams = field()
    security: GetQueryDistinctColumnNameSecurity = field()
    

@dataclass
class GetQueryDistinctColumnNameResponse:
    content_type: str = field()
    status_code: int = field()
    distinc_response_schema: Optional[shared.DistincResponseSchema] = field(default=None)
    get_query_distinct_column_name_400_application_json_object: Optional[GetQueryDistinctColumnName400ApplicationJSON] = field(default=None)
    get_query_distinct_column_name_401_application_json_object: Optional[GetQueryDistinctColumnName401ApplicationJSON] = field(default=None)
    get_query_distinct_column_name_404_application_json_object: Optional[GetQueryDistinctColumnName404ApplicationJSON] = field(default=None)
    get_query_distinct_column_name_500_application_json_object: Optional[GetQueryDistinctColumnName500ApplicationJSON] = field(default=None)
    
