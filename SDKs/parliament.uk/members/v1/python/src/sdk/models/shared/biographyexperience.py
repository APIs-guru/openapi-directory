from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BiographyExperience:
    end_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endMonth' }})
    end_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endYear' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    organisation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organisation' }})
    start_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startMonth' }})
    start_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startYear' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeId' }})
    
