from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import payitem


@dataclass_json
@dataclass
class PayItems:
    pay_items: Optional[payitem.PayItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayItems' }})
    
