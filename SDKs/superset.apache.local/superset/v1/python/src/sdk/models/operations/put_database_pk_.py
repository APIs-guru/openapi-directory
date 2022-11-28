from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutDatabasePkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDatabasePkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PutDatabasePk200ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: Optional[shared.DatabaseRestAPIPut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class PutDatabasePk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatabasePk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatabasePk403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatabasePk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatabasePk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutDatabasePk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PutDatabasePkRequest:
    path_params: PutDatabasePkPathParams = field()
    request: shared.DatabaseRestAPIPut = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutDatabasePkSecurity = field()
    

@dataclass
class PutDatabasePkResponse:
    content_type: str = field()
    status_code: int = field()
    put_database_pk_200_application_json_object: Optional[PutDatabasePk200ApplicationJSON] = field(default=None)
    put_database_pk_400_application_json_object: Optional[PutDatabasePk400ApplicationJSON] = field(default=None)
    put_database_pk_401_application_json_object: Optional[PutDatabasePk401ApplicationJSON] = field(default=None)
    put_database_pk_403_application_json_object: Optional[PutDatabasePk403ApplicationJSON] = field(default=None)
    put_database_pk_404_application_json_object: Optional[PutDatabasePk404ApplicationJSON] = field(default=None)
    put_database_pk_422_application_json_object: Optional[PutDatabasePk422ApplicationJSON] = field(default=None)
    put_database_pk_500_application_json_object: Optional[PutDatabasePk500ApplicationJSON] = field(default=None)
    
