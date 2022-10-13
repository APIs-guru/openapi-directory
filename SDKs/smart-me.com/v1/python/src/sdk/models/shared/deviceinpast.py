from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceInPast:
    counter_reading: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReading' }})
    counter_reading_export: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingExport' }})
    counter_reading_export_t1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingExportT1' }})
    counter_reading_export_t2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingExportT2' }})
    counter_reading_export_t3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingExportT3' }})
    counter_reading_export_t4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingExportT4' }})
    counter_reading_import: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingImport' }})
    counter_reading_import_t1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingImportT1' }})
    counter_reading_import_t2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingImportT2' }})
    counter_reading_import_t3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingImportT3' }})
    counter_reading_import_t4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingImportT4' }})
    counter_reading_t1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingT1' }})
    counter_reading_t2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingT2' }})
    counter_reading_t3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingT3' }})
    counter_reading_t4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingT4' }})
    counter_reading_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingUnit' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    serial: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Serial' }})
    
