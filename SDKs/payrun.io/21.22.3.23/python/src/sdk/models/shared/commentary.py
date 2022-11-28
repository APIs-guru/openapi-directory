from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CommentaryCommentaryEmployee:
    r"""CommentaryCommentaryEmployee
    The commentarys' employee
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclass
class CommentaryCommentaryPayRun:
    r"""CommentaryCommentaryPayRun
    The commentarys' pay run
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclass
class CommentaryCommentary:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Detail') }})
    employee: Optional[CommentaryCommentaryEmployee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employee') }})
    pay_run: Optional[CommentaryCommentaryPayRun] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRun') }})
    

@dataclass_json
@dataclass
class Commentary:
    commentary: Optional[CommentaryCommentary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Commentary') }})
    
