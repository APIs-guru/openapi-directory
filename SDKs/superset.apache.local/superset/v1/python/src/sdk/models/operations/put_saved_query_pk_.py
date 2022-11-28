from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutSavedQueryPkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSavedQueryPkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PutSavedQueryPk200ApplicationJSON:
    result: Optional[shared.SavedQueryRestAPIPut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class PutSavedQueryPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutSavedQueryPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutSavedQueryPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutSavedQueryPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PutSavedQueryPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PutSavedQueryPkRequest:
    path_params: PutSavedQueryPkPathParams = field()
    request: shared.SavedQueryRestAPIPut = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutSavedQueryPkSecurity = field()
    

@dataclass
class PutSavedQueryPkResponse:
    content_type: str = field()
    status_code: int = field()
    put_saved_query_pk_200_application_json_object: Optional[PutSavedQueryPk200ApplicationJSON] = field(default=None)
    put_saved_query_pk_400_application_json_object: Optional[PutSavedQueryPk400ApplicationJSON] = field(default=None)
    put_saved_query_pk_401_application_json_object: Optional[PutSavedQueryPk401ApplicationJSON] = field(default=None)
    put_saved_query_pk_404_application_json_object: Optional[PutSavedQueryPk404ApplicationJSON] = field(default=None)
    put_saved_query_pk_422_application_json_object: Optional[PutSavedQueryPk422ApplicationJSON] = field(default=None)
    put_saved_query_pk_500_application_json_object: Optional[PutSavedQueryPk500ApplicationJSON] = field(default=None)
    
