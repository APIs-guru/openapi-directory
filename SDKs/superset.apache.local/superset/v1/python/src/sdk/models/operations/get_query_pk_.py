from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetQueryPkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueryPkQueryParams:
    q: Optional[shared.GetItemSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetQueryPkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetQueryPk200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetQueryPk200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetQueryPk200ApplicationJSON:
    description_columns: Optional[GetQueryPk200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_columns') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label_columns: Optional[GetQueryPk200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_columns') }})
    result: Optional[shared.QueryRestAPIGet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    show_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_columns') }})
    show_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_title') }})
    

@dataclass_json
@dataclass
class GetQueryPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetQueryPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetQueryPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetQueryPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetQueryPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetQueryPkRequest:
    path_params: GetQueryPkPathParams = field()
    query_params: GetQueryPkQueryParams = field()
    security: GetQueryPkSecurity = field()
    

@dataclass
class GetQueryPkResponse:
    content_type: str = field()
    status_code: int = field()
    get_query_pk_200_application_json_object: Optional[GetQueryPk200ApplicationJSON] = field(default=None)
    get_query_pk_400_application_json_object: Optional[GetQueryPk400ApplicationJSON] = field(default=None)
    get_query_pk_401_application_json_object: Optional[GetQueryPk401ApplicationJSON] = field(default=None)
    get_query_pk_404_application_json_object: Optional[GetQueryPk404ApplicationJSON] = field(default=None)
    get_query_pk_422_application_json_object: Optional[GetQueryPk422ApplicationJSON] = field(default=None)
    get_query_pk_500_application_json_object: Optional[GetQueryPk500ApplicationJSON] = field(default=None)
    
