from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RiskEvaluation:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    risk_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'risk_level' }})
    
