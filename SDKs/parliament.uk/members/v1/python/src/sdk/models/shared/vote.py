from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Vote:
    acted_as_teller: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actedAsTeller') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    division_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('divisionNumber') }})
    house: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('house') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    in_affirmative_lobby: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inAffirmativeLobby') }})
    number_against: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberAgainst') }})
    number_in_favour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberInFavour') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
