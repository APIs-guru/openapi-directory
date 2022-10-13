from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InvoicePaymentReminder:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    relative_scheduled_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relative_scheduled_days' }})
    sent_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sent_at' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
