from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    plan: Optional[PlanDataTypeOfPlanBasedOnTheSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    source: Optional[PlanDataServiceThatProvisionedThePlanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
