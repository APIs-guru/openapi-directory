from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contact


@dataclass_json
@dataclass
class ContactsResponseError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ContactsResponsePagination:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    

@dataclass_json
@dataclass
class ContactsResponse:
    data: Optional[List[contact.Contact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    error: Optional[ContactsResponseError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    pagination: Optional[ContactsResponsePagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
