from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostSavedQuerySecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostSavedQueryRequest:
    request: shared.SavedQueryRestAPIPost = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostSavedQuerySecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostSavedQuery201ApplicationJSON:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.SavedQueryRestAPIPost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PostSavedQuery400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostSavedQuery401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostSavedQuery422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostSavedQuery500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostSavedQueryResponse:
    content_type: str = field(default=None)
    post_saved_query_201_application_json_object: Optional[PostSavedQuery201ApplicationJSON] = field(default=None)
    post_saved_query_400_application_json_object: Optional[PostSavedQuery400ApplicationJSON] = field(default=None)
    post_saved_query_401_application_json_object: Optional[PostSavedQuery401ApplicationJSON] = field(default=None)
    post_saved_query_422_application_json_object: Optional[PostSavedQuery422ApplicationJSON] = field(default=None)
    post_saved_query_500_application_json_object: Optional[PostSavedQuery500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
