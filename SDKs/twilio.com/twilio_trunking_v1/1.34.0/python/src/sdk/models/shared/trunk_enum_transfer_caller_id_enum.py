from dataclasses import dataclass, field
from typing import Enum

class TrunkEnumTransferCallerIDEnum(str, Enum):
    FROM_TRANSFEREE = "from-transferee"
    FROM_TRANSFEROR = "from-transferor"

