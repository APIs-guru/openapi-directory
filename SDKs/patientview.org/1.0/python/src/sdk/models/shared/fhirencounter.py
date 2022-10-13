from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import group
from . import link
from . import fhirobservation
from . import fhirprocedure


@dataclass_json
@dataclass
class FhirEncounter:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    encounter_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encounterType' }})
    group: Optional[group.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    observations: Optional[List[fhirobservation.FhirObservation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observations' }})
    procedures: Optional[List[fhirprocedure.FhirProcedure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'procedures' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
