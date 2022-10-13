from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteSavedQueryPkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSavedQueryPkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteSavedQueryPkRequest:
    path_params: DeleteSavedQueryPkPathParams = field(default=None)
    security: DeleteSavedQueryPkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteSavedQueryPk200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteSavedQueryPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteSavedQueryPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteSavedQueryPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteSavedQueryPkResponse:
    content_type: str = field(default=None)
    delete_saved_query_pk_200_application_json_object: Optional[DeleteSavedQueryPk200ApplicationJSON] = field(default=None)
    delete_saved_query_pk_404_application_json_object: Optional[DeleteSavedQueryPk404ApplicationJSON] = field(default=None)
    delete_saved_query_pk_422_application_json_object: Optional[DeleteSavedQueryPk422ApplicationJSON] = field(default=None)
    delete_saved_query_pk_500_application_json_object: Optional[DeleteSavedQueryPk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
