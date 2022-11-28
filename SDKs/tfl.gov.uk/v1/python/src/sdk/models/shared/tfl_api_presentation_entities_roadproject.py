from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TflAPIPresentationEntitiesRoadProjectPhaseEnum(str, Enum):
    UNSCOPED = "Unscoped"
    CONCEPT = "Concept"
    CONSULTATION_ENDED = "ConsultationEnded"
    CONSULTATION = "Consultation"
    CONSTRUCTION = "Construction"
    COMPLETE = "Complete"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesRoadProject:
    boroughs_benefited: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boroughsBenefited') }})
    construction_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constructionEndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    construction_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constructionStartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    consultation_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consultationEndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    consultation_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consultationPageUrl') }})
    consultation_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consultationStartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactEmail') }})
    contact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactName') }})
    cycle_superhighway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycleSuperhighwayId') }})
    external_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalPageUrl') }})
    phase: Optional[TflAPIPresentationEntitiesRoadProjectPhaseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase') }})
    project_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectDescription') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    project_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    project_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectPageUrl') }})
    project_summary_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectSummaryPageUrl') }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemeName') }})
    
