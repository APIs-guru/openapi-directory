from dataclasses import dataclass, field
from enum import Enum

class SinkEnumSinkTypeEnum(str, Enum):
    KINESIS = "kinesis"
    WEBHOOK = "webhook"
    SEGMENT = "segment"

