from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReinitializeActionConfiguration:
    r"""ReinitializeActionConfiguration
    The deserialized form of the <b>Reinitialize</b> service's request payload.
    """
    
    reset_alert_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetAlertActions') }})
    reset_alert_after_n_times: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetAlertAfterNTimes') }})
    reset_debug_mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetDebugMode') }})
    reset_discovery_and_polling_intervals: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetDiscoveryAndPollingIntervals') }})
    reset_java_settings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetJavaSettings') }})
    reset_other_alert_settings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetOtherAlertSettings') }})
    reset_removed_paused_object_list: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetRemovedPausedObjectList') }})
    reset_report_settings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetReportSettings') }})
    reset_thresholds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetThresholds') }})
    
