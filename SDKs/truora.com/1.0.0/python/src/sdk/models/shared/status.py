from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class StatusDataSetEnum(str, Enum):
    AFFILIATIONS_AND_INSURANCES = "affiliations_and_insurances"
    ALERT_IN_MEDIA = "alert_in_media"
    BEHAVIOR = "behavior"
    BUSINESS_BACKGROUND = "business_background"
    CRIMINAL_RECORD = "criminal_record"
    DRIVING_LICENSES = "driving_licenses"
    INTERNATIONAL_BACKGROUND = "international_background"
    LEGAL_BACKGROUND = "legal_background"
    PERSONAL_IDENTITY = "personal_identity"
    PROFESSIONAL_BACKGROUND = "professional_background"
    TRAFFIC_FINES = "traffic_fines"
    VEHICLE_INFORMATION = "vehicle_information"
    VEHICLE_PERMITS = "vehicle_permits"
    TAXES_AND_FINANCES = "taxes_and_finances"


@dataclass_json
@dataclass
class Status:
    r"""Status
    Represents the status of databases used to generate background checks
    """
    
    data_set: Optional[StatusDataSetEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_set') }})
    database_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_id') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_name') }})
    invalid_inputs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_inputs') }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
