from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Application:
    r"""Application
    Metadata about the application
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    application_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_url') }})
    created_at: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logo_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo_url') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason_for_access: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason_for_access') }})
    
