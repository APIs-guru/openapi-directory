from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablemetadatacolumnsresponse
from . import tablemetadataforeignkeysindexesresponse
from . import tablemetadataforeignkeysindexesresponse
from . import tablemetadataprimarykeyresponse


@dataclass_json
@dataclass
class TableMetadataResponseSchema:
    columns: Optional[List[tablemetadatacolumnsresponse.TableMetadataColumnsResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    foreign_keys: Optional[List[tablemetadataforeignkeysindexesresponse.TableMetadataForeignKeysIndexesResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foreignKeys' }})
    indexes: Optional[List[tablemetadataforeignkeysindexesresponse.TableMetadataForeignKeysIndexesResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primary_key: Optional[tablemetadataprimarykeyresponse.TableMetadataPrimaryKeyResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryKey' }})
    select_star: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectStar' }})
    
