from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserRoles:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class UserStatusEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"
    ARCHIVED = "ARCHIVED"


@dataclass_json
@dataclass
class UserUcisHealth:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UserUcis:
    health: Optional[UserUcisHealth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    ucp_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ucpLabel' }})
    

@dataclass_json
@dataclass
class User:
    account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    acount_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acountLabel' }})
    contact_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactNumber' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    roles: Optional[List[UserRoles]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    status: Optional[UserStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    ucis: Optional[List[UserUcis]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ucis' }})
    
