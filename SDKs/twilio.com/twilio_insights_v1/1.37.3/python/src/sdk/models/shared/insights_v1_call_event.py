from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsightsV1CallEvent:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    call_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_sid') }})
    carrier_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_edge') }})
    client_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_edge') }})
    edge: Optional[EventEnumTwilioEdgeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edge') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    level: Optional[EventEnumLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sdk_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdk_edge') }})
    sip_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_edge') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
