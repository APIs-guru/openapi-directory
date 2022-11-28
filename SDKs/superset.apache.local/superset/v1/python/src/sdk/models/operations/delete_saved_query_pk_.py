from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteSavedQueryPkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSavedQueryPkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteSavedQueryPk200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteSavedQueryPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteSavedQueryPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteSavedQueryPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteSavedQueryPkRequest:
    path_params: DeleteSavedQueryPkPathParams = field()
    security: DeleteSavedQueryPkSecurity = field()
    

@dataclass
class DeleteSavedQueryPkResponse:
    content_type: str = field()
    status_code: int = field()
    delete_saved_query_pk_200_application_json_object: Optional[DeleteSavedQueryPk200ApplicationJSON] = field(default=None)
    delete_saved_query_pk_404_application_json_object: Optional[DeleteSavedQueryPk404ApplicationJSON] = field(default=None)
    delete_saved_query_pk_422_application_json_object: Optional[DeleteSavedQueryPk422ApplicationJSON] = field(default=None)
    delete_saved_query_pk_500_application_json_object: Optional[DeleteSavedQueryPk500ApplicationJSON] = field(default=None)
    
