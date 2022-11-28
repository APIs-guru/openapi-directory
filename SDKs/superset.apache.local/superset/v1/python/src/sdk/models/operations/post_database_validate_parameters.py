from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostDatabaseValidateParametersSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostDatabaseValidateParameters200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatabaseValidateParameters400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatabaseValidateParameters422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatabaseValidateParameters500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostDatabaseValidateParametersRequest:
    request: shared.DatabaseValidateParametersSchema = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostDatabaseValidateParametersSecurity = field()
    

@dataclass
class PostDatabaseValidateParametersResponse:
    content_type: str = field()
    status_code: int = field()
    post_database_validate_parameters_200_application_json_object: Optional[PostDatabaseValidateParameters200ApplicationJSON] = field(default=None)
    post_database_validate_parameters_400_application_json_object: Optional[PostDatabaseValidateParameters400ApplicationJSON] = field(default=None)
    post_database_validate_parameters_422_application_json_object: Optional[PostDatabaseValidateParameters422ApplicationJSON] = field(default=None)
    post_database_validate_parameters_500_application_json_object: Optional[PostDatabaseValidateParameters500ApplicationJSON] = field(default=None)
    
