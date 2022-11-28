from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostDatabaseSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostDatabase201ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: Optional[shared.DatabaseRestAPIPost] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class PostDatabase400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatabase401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatabase404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatabase500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostDatabaseRequest:
    request: shared.DatabaseRestAPIPost = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostDatabaseSecurity = field()
    

@dataclass
class PostDatabaseResponse:
    content_type: str = field()
    status_code: int = field()
    post_database_201_application_json_object: Optional[PostDatabase201ApplicationJSON] = field(default=None)
    post_database_400_application_json_object: Optional[PostDatabase400ApplicationJSON] = field(default=None)
    post_database_401_application_json_object: Optional[PostDatabase401ApplicationJSON] = field(default=None)
    post_database_404_application_json_object: Optional[PostDatabase404ApplicationJSON] = field(default=None)
    post_database_500_application_json_object: Optional[PostDatabase500ApplicationJSON] = field(default=None)
    
