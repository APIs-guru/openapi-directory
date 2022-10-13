from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_additionalproperties
from . import tfl_api_presentation_entities_place
from . import tfl_api_presentation_entities_linegroup
from . import tfl_api_presentation_entities_linemodegroup
from . import tfl_api_presentation_entities_identifier


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStopPoint:
    accessibility_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessibilitySummary' }})
    additional_properties: Optional[List[tfl_api_presentation_entities_additionalproperties.TflAPIPresentationEntitiesAdditionalProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalProperties' }})
    children: Optional[List[tfl_api_presentation_entities_place.TflAPIPresentationEntitiesPlace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'children' }})
    children_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childrenUrls' }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonName' }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    hub_naptan_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hubNaptanCode' }})
    ics_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icsCode' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indicator' }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    line_group: Optional[List[tfl_api_presentation_entities_linegroup.TflAPIPresentationEntitiesLineGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineGroup' }})
    line_mode_groups: Optional[List[tfl_api_presentation_entities_linemodegroup.TflAPIPresentationEntitiesLineModeGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineModeGroups' }})
    lines: Optional[List[tfl_api_presentation_entities_identifier.TflAPIPresentationEntitiesIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lines' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    modes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modes' }})
    naptan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'naptanId' }})
    naptan_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'naptanMode' }})
    place_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeType' }})
    platform_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformName' }})
    sms_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsCode' }})
    station_naptan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stationNaptan' }})
    status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stop_letter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopLetter' }})
    stop_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopType' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
