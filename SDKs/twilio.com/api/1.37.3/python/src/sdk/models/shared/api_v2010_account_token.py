from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIV2010AccountTokenIceServers:
    credential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    urls: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class APIV2010AccountToken:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created') }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated') }})
    ice_servers: Optional[List[APIV2010AccountTokenIceServers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ice_servers') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
