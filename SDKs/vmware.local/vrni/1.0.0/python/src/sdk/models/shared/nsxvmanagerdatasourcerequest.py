from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import passwordcredentials


@dataclass_json
@dataclass
class NsxvManagerDataSourceRequest:
    central_cli_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'central_cli_enabled' }})
    credentials: passwordcredentials.PasswordCredentials = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    fqdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fqdn' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    ipfix_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipfix_enabled' }})
    nickname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    proxy_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxy_id' }})
    vcenter_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcenter_id' }})
    
