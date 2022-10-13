from dataclasses import dataclass, field
from typing import Enum

class VideoRoomSummaryEnumCreatedMethodEnum(str, Enum):
    SDK = "sdk"
    AD_HOC = "ad_hoc"
    API = "api"

