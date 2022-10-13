from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import planresourceencryptionproperties
from . import vnetproperties


@dataclass_json
@dataclass
class PlanResourceProperties:
    default_auto_suspend_delay_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAutoSuspendDelayMinutes' }})
    default_codespace_sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCodespaceSku' }})
    default_environment_sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultEnvironmentSku' }})
    encryption: Optional[planresourceencryptionproperties.PlanResourceEncryptionProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryption' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    vnet_properties: Optional[vnetproperties.VnetProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vnetProperties' }})
    
