from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_passengerflow
from . import tfl_api_presentation_entities_trainloading


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesCrowding:
    passenger_flows: Optional[List[tfl_api_presentation_entities_passengerflow.TflAPIPresentationEntitiesPassengerFlow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passengerFlows' }})
    train_loadings: Optional[List[tfl_api_presentation_entities_trainloading.TflAPIPresentationEntitiesTrainLoading]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainLoadings' }})
    
