from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import wlt_record
from . import wlt_record


@dataclass_json
@dataclass
class EliminationAllianceBackup:
    in_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in' }})
    out: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'out' }})
    

@dataclass_json
@dataclass
class EliminationAllianceStatus:
    current_level_record: Optional[wlt_record.WltRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_level_record' }})
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    playoff_average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playoff_average' }})
    record: Optional[wlt_record.WltRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'record' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class EliminationAlliance:
    backup: Optional[EliminationAllianceBackup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup' }})
    declines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declines' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    picks: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'picks' }})
    status: Optional[EliminationAllianceStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
