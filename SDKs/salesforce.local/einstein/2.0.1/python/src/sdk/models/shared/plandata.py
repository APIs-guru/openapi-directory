from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlanDataTypeOfPlanBasedOnTheSourceEnum(str, Enum):
    STARTER = "STARTER"
    SFDC_1_M_EDITION = "SFDC_1M_EDITION"
    BRONZE = "BRONZE"
    SILVER = "SILVER"
    GOLD = "GOLD"
    DATASET_DOWNLOAD = "DATASET_DOWNLOAD"

class PlanDataServiceThatProvisionedThePlanEnum(str, Enum):
    SALESFORCE = "SALESFORCE"
    HEROKU = "HEROKU"
    SF_AUTO_PROVISION = "SF_AUTO_PROVISION"
    SF_AUTO_PROVISION_BOUND = "SF_AUTO_PROVISION_BOUND"


@dataclass_json
@dataclass
class PlanData:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    plan: Optional[PlanDataTypeOfPlanBasedOnTheSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    source: Optional[PlanDataServiceThatProvisionedThePlanEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
