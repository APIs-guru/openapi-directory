from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStopPoint:
    accessibility_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessibilitySummary') }})
    additional_properties: Optional[List[TflAPIPresentationEntitiesAdditionalProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalProperties') }})
    children: Optional[List[TflAPIPresentationEntitiesPlace]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('children') }})
    children_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childrenUrls') }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonName') }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    hub_naptan_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hubNaptanCode') }})
    ics_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icsCode') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indicator') }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    line_group: Optional[List[TflAPIPresentationEntitiesLineGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineGroup') }})
    line_mode_groups: Optional[List[TflAPIPresentationEntitiesLineModeGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineModeGroups') }})
    lines: Optional[List[TflAPIPresentationEntitiesIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    modes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modes') }})
    naptan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('naptanId') }})
    naptan_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('naptanMode') }})
    place_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeType') }})
    platform_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformName') }})
    sms_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsCode') }})
    station_naptan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stationNaptan') }})
    status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stop_letter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopLetter') }})
    stop_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopType') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
