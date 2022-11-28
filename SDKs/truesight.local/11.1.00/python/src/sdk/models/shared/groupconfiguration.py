from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroupConfiguration:
    r"""GroupConfiguration
    The deserialized form of the <b>Energy Footprint Update</b> service's request payload.
    """
    
    co2_emission: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('co2Emission') }})
    energy_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyCost') }})
    group_name_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupNameFilter') }})
    
