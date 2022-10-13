from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    export_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportFormat' }})
    export_interval: Optional[AutoExportSettingsExportIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportInterval' }})
    meter_point_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeterPointId' }})
    upload_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UploadType' }})
    
