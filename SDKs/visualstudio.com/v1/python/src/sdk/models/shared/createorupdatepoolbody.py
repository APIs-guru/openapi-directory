from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateOrUpdatePoolBody:
    pool_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('poolGroupName') }})
    vm_specs: VMSpecs = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmSpecs') }})
    domain_user_credentials: Optional[DomainUserCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainUserCredentials') }})
    hot_pool_settings: Optional[HotPoolSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotPoolSettings') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    user_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userGroupName') }})
    
