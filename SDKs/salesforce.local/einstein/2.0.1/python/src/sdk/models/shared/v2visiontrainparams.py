from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class V2VisionTrainParams:
    r"""V2VisionTrainParams
    JSON that contains parameters that specify how the model is created
    """
    
    train_split_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainSplitRatio') }})
    with_feedback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withFeedback') }})
    with_global_dataset_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withGlobalDatasetId') }})
    
