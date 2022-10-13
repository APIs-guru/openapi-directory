from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutSavedQueryPkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSavedQueryPkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PutSavedQueryPkRequest:
    path_params: PutSavedQueryPkPathParams = field(default=None)
    request: shared.SavedQueryRestAPIPut = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutSavedQueryPkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PutSavedQueryPk200ApplicationJSON:
    result: Optional[shared.SavedQueryRestAPIPut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PutSavedQueryPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutSavedQueryPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutSavedQueryPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutSavedQueryPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutSavedQueryPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PutSavedQueryPkResponse:
    content_type: str = field(default=None)
    put_saved_query_pk_200_application_json_object: Optional[PutSavedQueryPk200ApplicationJSON] = field(default=None)
    put_saved_query_pk_400_application_json_object: Optional[PutSavedQueryPk400ApplicationJSON] = field(default=None)
    put_saved_query_pk_401_application_json_object: Optional[PutSavedQueryPk401ApplicationJSON] = field(default=None)
    put_saved_query_pk_404_application_json_object: Optional[PutSavedQueryPk404ApplicationJSON] = field(default=None)
    put_saved_query_pk_422_application_json_object: Optional[PutSavedQueryPk422ApplicationJSON] = field(default=None)
    put_saved_query_pk_500_application_json_object: Optional[PutSavedQueryPk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
