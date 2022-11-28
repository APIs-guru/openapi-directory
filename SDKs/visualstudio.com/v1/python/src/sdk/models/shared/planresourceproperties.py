from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlanResourceProperties:
    default_auto_suspend_delay_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAutoSuspendDelayMinutes') }})
    default_codespace_sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCodespaceSku') }})
    default_environment_sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultEnvironmentSku') }})
    encryption: Optional[PlanResourceEncryptionProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    vnet_properties: Optional[VnetProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vnetProperties') }})
    
