from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostDatabaseValidateParametersSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostDatabaseValidateParametersRequest:
    request: shared.DatabaseValidateParametersSchema = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostDatabaseValidateParametersSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostDatabaseValidateParameters200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDatabaseValidateParameters400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDatabaseValidateParameters422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDatabaseValidateParameters500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostDatabaseValidateParametersResponse:
    content_type: str = field(default=None)
    post_database_validate_parameters_200_application_json_object: Optional[PostDatabaseValidateParameters200ApplicationJSON] = field(default=None)
    post_database_validate_parameters_400_application_json_object: Optional[PostDatabaseValidateParameters400ApplicationJSON] = field(default=None)
    post_database_validate_parameters_422_application_json_object: Optional[PostDatabaseValidateParameters422ApplicationJSON] = field(default=None)
    post_database_validate_parameters_500_application_json_object: Optional[PostDatabaseValidateParameters500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
