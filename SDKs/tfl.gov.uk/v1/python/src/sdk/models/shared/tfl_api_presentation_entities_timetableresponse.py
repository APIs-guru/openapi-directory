from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesTimetableResponse:
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    disambiguation: Optional[TflAPIPresentationEntitiesTimetablesDisambiguation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disambiguation') }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineId') }})
    line_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineName') }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdfUrl') }})
    stations: Optional[List[TflAPIPresentationEntitiesMatchedStop]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stations') }})
    status_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusErrorMessage') }})
    stops: Optional[List[TflAPIPresentationEntitiesMatchedStop]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stops') }})
    timetable: Optional[TflAPIPresentationEntitiesTimetable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timetable') }})
    
