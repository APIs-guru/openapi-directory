from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetUserUsernamePathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetUserUsername200ApplicationJSONAddress:
    r"""GetUserUsername200ApplicationJSONAddress
    The user's preferred postal address.
    """
    
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatted') }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locality') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_address') }})
    

@dataclass_json
@dataclass
class GetUserUsername200ApplicationJSON:
    sub: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    at_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@id') }})
    address: Optional[GetUserUsername200ApplicationJSONAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    birthdate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthdate') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    email_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_verified') }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family_name') }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('given_name') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    me: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('me') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    phone_number_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number_verified') }})
    picture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('picture') }})
    preferred_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_username') }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    updated_at: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    webmail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webmail') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    zoneinfo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zoneinfo') }})
    

@dataclass
class GetUserUsernameRequest:
    path_params: GetUserUsernamePathParams = field()
    

@dataclass
class GetUserUsernameResponse:
    content_type: str = field()
    status_code: int = field()
    get_user_username_200_application_json_object: Optional[GetUserUsername200ApplicationJSON] = field(default=None)
    
