from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RawDocumentDataParseStrategyEnum(str, Enum):
    UBL = "ubl"
    CII = "cii"
    IDOC = "idoc"


@dataclass_json
@dataclass
class RawDocumentData:
    r"""RawDocumentData
    A document to send, in base64 encoded format.
    """
    
    document: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    document_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentTypeId') }})
    parse: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parse') }})
    parse_strategy: Optional[RawDocumentDataParseStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parseStrategy') }})
    process_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processId') }})
    
