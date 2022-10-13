from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostDatabaseTestConnectionSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostDatabaseTestConnectionRequest:
    request: shared.DatabaseTestConnectionSchema = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostDatabaseTestConnectionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostDatabaseTestConnection200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDatabaseTestConnection400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDatabaseTestConnection422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDatabaseTestConnection500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostDatabaseTestConnectionResponse:
    content_type: str = field(default=None)
    post_database_test_connection_200_application_json_object: Optional[PostDatabaseTestConnection200ApplicationJSON] = field(default=None)
    post_database_test_connection_400_application_json_object: Optional[PostDatabaseTestConnection400ApplicationJSON] = field(default=None)
    post_database_test_connection_422_application_json_object: Optional[PostDatabaseTestConnection422ApplicationJSON] = field(default=None)
    post_database_test_connection_500_application_json_object: Optional[PostDatabaseTestConnection500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
