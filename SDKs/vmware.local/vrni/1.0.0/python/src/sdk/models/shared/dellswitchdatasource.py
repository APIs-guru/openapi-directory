from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import passwordcredentials
from . import datasourcetype_enum
from . import dellswitchtype_enum


@dataclass_json
@dataclass
class DellSwitchDataSource:
    credentials: Optional[passwordcredentials.PasswordCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[datasourcetype_enum.DataSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    fqdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fqdn' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    proxy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxy_id' }})
    switch_type: Optional[dellswitchtype_enum.DellSwitchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switch_type' }})
    
