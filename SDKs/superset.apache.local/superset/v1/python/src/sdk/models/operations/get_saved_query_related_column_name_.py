from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSavedQueryRelatedColumnNamePathParams:
    column_name: str = field(default=None, metadata={'path_param': { 'field_name': 'column_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSavedQueryRelatedColumnNameQueryParams:
    q: Optional[shared.GetRelatedSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetSavedQueryRelatedColumnNameSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSavedQueryRelatedColumnNameRequest:
    path_params: GetSavedQueryRelatedColumnNamePathParams = field(default=None)
    query_params: GetSavedQueryRelatedColumnNameQueryParams = field(default=None)
    security: GetSavedQueryRelatedColumnNameSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetSavedQueryRelatedColumnName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQueryRelatedColumnName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQueryRelatedColumnName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQueryRelatedColumnName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetSavedQueryRelatedColumnNameResponse:
    content_type: str = field(default=None)
    get_saved_query_related_column_name_400_application_json_object: Optional[GetSavedQueryRelatedColumnName400ApplicationJSON] = field(default=None)
    get_saved_query_related_column_name_401_application_json_object: Optional[GetSavedQueryRelatedColumnName401ApplicationJSON] = field(default=None)
    get_saved_query_related_column_name_404_application_json_object: Optional[GetSavedQueryRelatedColumnName404ApplicationJSON] = field(default=None)
    get_saved_query_related_column_name_500_application_json_object: Optional[GetSavedQueryRelatedColumnName500ApplicationJSON] = field(default=None)
    related_response_schema: Optional[shared.RelatedResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
