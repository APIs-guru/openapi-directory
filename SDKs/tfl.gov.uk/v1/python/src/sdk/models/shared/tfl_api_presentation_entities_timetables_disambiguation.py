from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_timetables_disambiguationoption


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesTimetablesDisambiguation:
    disambiguation_options: Optional[List[tfl_api_presentation_entities_timetables_disambiguationoption.TflAPIPresentationEntitiesTimetablesDisambiguationOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disambiguationOptions' }})
    
