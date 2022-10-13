from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteSavedQueryQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class DeleteSavedQuerySecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteSavedQueryRequest:
    query_params: DeleteSavedQueryQueryParams = field(default=None)
    security: DeleteSavedQuerySecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteSavedQuery200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteSavedQuery401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteSavedQuery404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteSavedQuery422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteSavedQuery500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteSavedQueryResponse:
    content_type: str = field(default=None)
    delete_saved_query_200_application_json_object: Optional[DeleteSavedQuery200ApplicationJSON] = field(default=None)
    delete_saved_query_401_application_json_object: Optional[DeleteSavedQuery401ApplicationJSON] = field(default=None)
    delete_saved_query_404_application_json_object: Optional[DeleteSavedQuery404ApplicationJSON] = field(default=None)
    delete_saved_query_422_application_json_object: Optional[DeleteSavedQuery422ApplicationJSON] = field(default=None)
    delete_saved_query_500_application_json_object: Optional[DeleteSavedQuery500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
