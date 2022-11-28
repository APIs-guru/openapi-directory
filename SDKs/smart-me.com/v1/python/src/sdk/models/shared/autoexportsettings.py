from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AutoExportSettingsExportIntervalEnum(str, Enum):
    NO_EXPORT = "NoExport"
    HOURLY = "Hourly"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUATER_YEARLY = "QuaterYearly"
    HALF_YEARLY = "HalfYearly"
    YEARLY = "Yearly"


@dataclass_json
@dataclass
class AutoExportSettings:
    r"""AutoExportSettings
    Settings for the auto export functionality of a meter
    """
    
    export_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportFormat') }})
    export_interval: Optional[AutoExportSettingsExportIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportInterval') }})
    meter_point_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeterPointId') }})
    upload_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UploadType') }})
    
