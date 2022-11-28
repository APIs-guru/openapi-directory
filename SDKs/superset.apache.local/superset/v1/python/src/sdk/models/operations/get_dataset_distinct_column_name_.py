from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDatasetDistinctColumnNamePathParams:
    column_name: str = field(metadata={'path_param': { 'field_name': 'column_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatasetDistinctColumnNameQueryParams:
    q: Optional[shared.GetRelatedSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatasetDistinctColumnNameSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDatasetDistinctColumnName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatasetDistinctColumnName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatasetDistinctColumnName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatasetDistinctColumnName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDatasetDistinctColumnNameRequest:
    path_params: GetDatasetDistinctColumnNamePathParams = field()
    query_params: GetDatasetDistinctColumnNameQueryParams = field()
    security: GetDatasetDistinctColumnNameSecurity = field()
    

@dataclass
class GetDatasetDistinctColumnNameResponse:
    content_type: str = field()
    status_code: int = field()
    distinc_response_schema: Optional[shared.DistincResponseSchema] = field(default=None)
    get_dataset_distinct_column_name_400_application_json_object: Optional[GetDatasetDistinctColumnName400ApplicationJSON] = field(default=None)
    get_dataset_distinct_column_name_401_application_json_object: Optional[GetDatasetDistinctColumnName401ApplicationJSON] = field(default=None)
    get_dataset_distinct_column_name_404_application_json_object: Optional[GetDatasetDistinctColumnName404ApplicationJSON] = field(default=None)
    get_dataset_distinct_column_name_500_application_json_object: Optional[GetDatasetDistinctColumnName500ApplicationJSON] = field(default=None)
    
