from dataclasses import dataclass, field
from enum import Enum

class MessageEnumStatusEnum(str, Enum):
    QUEUED = "queued"
    SENDING = "sending"
    SENT = "sent"
    FAILED = "failed"
    DELIVERED = "delivered"
    UNDELIVERED = "undelivered"
    RECEIVING = "receiving"
    RECEIVED = "received"
    ACCEPTED = "accepted"
    SCHEDULED = "scheduled"
    READ = "read"
    PARTIALLY_DELIVERED = "partially_delivered"
    CANCELED = "canceled"

