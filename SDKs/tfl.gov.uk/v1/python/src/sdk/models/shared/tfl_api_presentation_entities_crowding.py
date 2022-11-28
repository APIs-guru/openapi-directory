from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesCrowding:
    passenger_flows: Optional[List[TflAPIPresentationEntitiesPassengerFlow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passengerFlows') }})
    train_loadings: Optional[List[TflAPIPresentationEntitiesTrainLoading]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainLoadings') }})
    
