from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V2VisionTrainParams:
    train_split_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainSplitRatio' }})
    with_feedback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withFeedback' }})
    with_global_dataset_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withGlobalDatasetId' }})
    
