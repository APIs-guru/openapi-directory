from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import wlt_record
from . import wlt_record

class TeamEventStatusPlayoffLevelEnum(str, Enum):
    QM = "qm"
    EF = "ef"
    QF = "qf"
    SF = "sf"
    F = "f"

class TeamEventStatusPlayoffStatusEnum(str, Enum):
    WON = "won"
    ELIMINATED = "eliminated"
    PLAYING = "playing"


@dataclass_json
@dataclass
class TeamEventStatusPlayoff:
    current_level_record: Optional[wlt_record.WltRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_level_record' }})
    level: Optional[TeamEventStatusPlayoffLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    playoff_average: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playoff_average' }})
    record: Optional[wlt_record.WltRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'record' }})
    status: Optional[TeamEventStatusPlayoffStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
