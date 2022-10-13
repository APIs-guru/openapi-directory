from dataclasses import dataclass, field
from typing import Enum

class SinkEnumSinkTypeEnum(str, Enum):
    KINESIS = "kinesis"
    WEBHOOK = "webhook"
    SEGMENT = "segment"

