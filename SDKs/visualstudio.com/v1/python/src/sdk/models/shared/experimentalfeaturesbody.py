from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExperimentalFeaturesBody:
    enable_dynamic_https_detection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableDynamicHttpsDetection') }})
    queue_resource_allocation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueResourceAllocation') }})
    use_prebuilt_images: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usePrebuiltImages') }})
    
