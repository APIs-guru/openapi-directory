from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RawDocumentDataParseStrategyParseStrategyEnum(str, Enum):
    UBL = "ubl"
    CII = "cii"
    IDOC = "idoc"


@dataclass_json
@dataclass
class RawDocumentData:
    document: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    document_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentTypeId' }})
    parse: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parse' }})
    parse_strategy: Optional[RawDocumentDataParseStrategyParseStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parseStrategy' }})
    process_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processId' }})
    
