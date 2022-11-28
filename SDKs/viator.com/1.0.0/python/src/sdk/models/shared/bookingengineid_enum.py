from dataclasses import dataclass, field
from enum import Enum

class BookingEngineIDEnum(str, Enum):
    FREESALE_BE = "FreesaleBE"
    UNCONDITIONAL_BE = "UnconditionalBE"
    DEFERRED_CRMBE = "DeferredCRMBE"
    FREESALE_ON_REQUEST_BE = "FreesaleOnRequestBE"

