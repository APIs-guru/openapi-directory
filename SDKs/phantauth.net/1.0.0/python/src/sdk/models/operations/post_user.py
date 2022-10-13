from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostUserRequestBodyAddress:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formatted' }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locality' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_address' }})
    

@dataclass_json
@dataclass
class PostUserRequestBody:
    at_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@id' }})
    address: Optional[PostUserRequestBodyAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    birthdate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthdate' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    email_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_verified' }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family_name' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'given_name' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    me: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'me' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middle_name' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    phone_number_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number_verified' }})
    picture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'picture' }})
    preferred_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferred_username' }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    sub: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    updated_at: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    webmail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webmail' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    zoneinfo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zoneinfo' }})
    

@dataclass
class PostUserRequest:
    request: Optional[PostUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
