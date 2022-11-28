from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceInPast:
    r"""DeviceInPast
    Container Class for the Web API. Conatinas the MeterValues in the Past
    """
    
    counter_reading: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReading') }})
    counter_reading_export: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingExport') }})
    counter_reading_export_t1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingExportT1') }})
    counter_reading_export_t2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingExportT2') }})
    counter_reading_export_t3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingExportT3') }})
    counter_reading_export_t4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingExportT4') }})
    counter_reading_import: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingImport') }})
    counter_reading_import_t1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingImportT1') }})
    counter_reading_import_t2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingImportT2') }})
    counter_reading_import_t3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingImportT3') }})
    counter_reading_import_t4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingImportT4') }})
    counter_reading_t1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingT1') }})
    counter_reading_t2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingT2') }})
    counter_reading_t3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingT3') }})
    counter_reading_t4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingT4') }})
    counter_reading_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CounterReadingUnit') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    serial: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Serial') }})
    
