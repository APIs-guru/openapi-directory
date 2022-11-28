from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSavedQueryDistinctColumnNamePathParams:
    column_name: str = field(metadata={'path_param': { 'field_name': 'column_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSavedQueryDistinctColumnNameQueryParams:
    q: Optional[shared.GetRelatedSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetSavedQueryDistinctColumnNameSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetSavedQueryDistinctColumnName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSavedQueryDistinctColumnName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSavedQueryDistinctColumnName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSavedQueryDistinctColumnName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetSavedQueryDistinctColumnNameRequest:
    path_params: GetSavedQueryDistinctColumnNamePathParams = field()
    query_params: GetSavedQueryDistinctColumnNameQueryParams = field()
    security: GetSavedQueryDistinctColumnNameSecurity = field()
    

@dataclass
class GetSavedQueryDistinctColumnNameResponse:
    content_type: str = field()
    status_code: int = field()
    distinc_response_schema: Optional[shared.DistincResponseSchema] = field(default=None)
    get_saved_query_distinct_column_name_400_application_json_object: Optional[GetSavedQueryDistinctColumnName400ApplicationJSON] = field(default=None)
    get_saved_query_distinct_column_name_401_application_json_object: Optional[GetSavedQueryDistinctColumnName401ApplicationJSON] = field(default=None)
    get_saved_query_distinct_column_name_404_application_json_object: Optional[GetSavedQueryDistinctColumnName404ApplicationJSON] = field(default=None)
    get_saved_query_distinct_column_name_500_application_json_object: Optional[GetSavedQueryDistinctColumnName500ApplicationJSON] = field(default=None)
    
