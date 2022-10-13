from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteDatabasePkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDatabasePkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteDatabasePkRequest:
    path_params: DeleteDatabasePkPathParams = field(default=None)
    security: DeleteDatabasePkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteDatabasePk200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatabasePk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatabasePk403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatabasePk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatabasePk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatabasePk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteDatabasePkResponse:
    content_type: str = field(default=None)
    delete_database_pk_200_application_json_object: Optional[DeleteDatabasePk200ApplicationJSON] = field(default=None)
    delete_database_pk_401_application_json_object: Optional[DeleteDatabasePk401ApplicationJSON] = field(default=None)
    delete_database_pk_403_application_json_object: Optional[DeleteDatabasePk403ApplicationJSON] = field(default=None)
    delete_database_pk_404_application_json_object: Optional[DeleteDatabasePk404ApplicationJSON] = field(default=None)
    delete_database_pk_422_application_json_object: Optional[DeleteDatabasePk422ApplicationJSON] = field(default=None)
    delete_database_pk_500_application_json_object: Optional[DeleteDatabasePk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
