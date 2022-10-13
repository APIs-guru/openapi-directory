from dataclasses import dataclass, field
from typing import Enum

class TollfreeVerificationEnumOptInTypeEnum(str, Enum):
    VERBAL = "VERBAL"
    WEB_FORM = "WEB_FORM"
    PAPER_FORM = "PAPER_FORM"
    VIA_TEXT = "VIA_TEXT"
    MOBILE_QR_CODE = "MOBILE_QR_CODE"

