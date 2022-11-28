from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObservationHeading:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    decimal_places: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimalPlaces') }})
    default_panel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPanel') }})
    default_panel_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPanelOrder') }})
    heading: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    info_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoLink') }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_graph: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxGraph') }})
    min_graph: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minGraph') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    normal_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalRange') }})
    observation_heading_groups: Optional[List[ObservationHeadingGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observationHeadingGroups') }})
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    
