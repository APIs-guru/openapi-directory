from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayorEmailOptOutRequest:
    reminder_emails_opt_out: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reminderEmailsOptOut' }})
    
