from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportLineReportLineReportLine:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    generated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Generated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tax_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxMonth' }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxYear' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    

@dataclass_json
@dataclass
class ReportLine:
    report_line: Optional[ReportLineReportLineReportLine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportLine' }})
    
