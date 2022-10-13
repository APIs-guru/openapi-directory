from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import team_event_status_alliance_backup


@dataclass_json
@dataclass
class TeamEventStatusAlliance:
    backup: Optional[team_event_status_alliance_backup.TeamEventStatusAllianceBackup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    pick: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pick' }})
    
