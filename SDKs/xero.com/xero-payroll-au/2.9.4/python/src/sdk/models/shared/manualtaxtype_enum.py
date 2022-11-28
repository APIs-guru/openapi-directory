from dataclasses import dataclass, field
from enum import Enum

class ManualTaxTypeEnum(str, Enum):
    PAYGMANUAL = "PAYGMANUAL"
    ETPOMANUAL = "ETPOMANUAL"
    ETPRMANUAL = "ETPRMANUAL"
    SCHEDULE5_MANUAL = "SCHEDULE5MANUAL"
    SCHEDULE5_STSLMANUAL = "SCHEDULE5STSLMANUAL"

