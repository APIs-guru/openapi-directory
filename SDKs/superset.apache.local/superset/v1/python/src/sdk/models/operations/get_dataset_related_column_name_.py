from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDatasetRelatedColumnNamePathParams:
    column_name: str = field(default=None, metadata={'path_param': { 'field_name': 'column_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatasetRelatedColumnNameQueryParams:
    q: Optional[shared.GetRelatedSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatasetRelatedColumnNameSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatasetRelatedColumnNameRequest:
    path_params: GetDatasetRelatedColumnNamePathParams = field(default=None)
    query_params: GetDatasetRelatedColumnNameQueryParams = field(default=None)
    security: GetDatasetRelatedColumnNameSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDatasetRelatedColumnName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatasetRelatedColumnName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatasetRelatedColumnName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatasetRelatedColumnName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDatasetRelatedColumnNameResponse:
    content_type: str = field(default=None)
    get_dataset_related_column_name_400_application_json_object: Optional[GetDatasetRelatedColumnName400ApplicationJSON] = field(default=None)
    get_dataset_related_column_name_401_application_json_object: Optional[GetDatasetRelatedColumnName401ApplicationJSON] = field(default=None)
    get_dataset_related_column_name_404_application_json_object: Optional[GetDatasetRelatedColumnName404ApplicationJSON] = field(default=None)
    get_dataset_related_column_name_500_application_json_object: Optional[GetDatasetRelatedColumnName500ApplicationJSON] = field(default=None)
    related_response_schema: Optional[shared.RelatedResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
