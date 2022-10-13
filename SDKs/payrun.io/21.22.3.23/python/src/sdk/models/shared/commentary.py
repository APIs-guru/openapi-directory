from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CommentaryCommentaryEmployeeEmployee:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class CommentaryCommentaryPayRunPayRun:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class CommentaryCommentaryCommentary:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Detail' }})
    employee: Optional[CommentaryCommentaryEmployeeEmployee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Employee' }})
    pay_run: Optional[CommentaryCommentaryPayRunPayRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayRun' }})
    

@dataclass_json
@dataclass
class Commentary:
    commentary: Optional[CommentaryCommentaryCommentary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Commentary' }})
    
