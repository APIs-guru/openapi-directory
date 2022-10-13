from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogTax:
    applies_to_custom_amounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applies_to_custom_amounts' }})
    calculation_phase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calculation_phase' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    inclusion_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inclusion_type' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    
