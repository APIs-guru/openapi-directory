import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum FaxV1FaxDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
export declare enum FaxV1FaxQualityEnum {
    Standard = "standard",
    Fine = "fine",
    Superfine = "superfine"
}
export declare enum FaxV1FaxStatusEnum {
    Queued = "queued",
    Processing = "processing",
    Sending = "sending",
    Delivered = "delivered",
    Receiving = "receiving",
    Received = "received",
    NoAnswer = "no-answer",
    Busy = "busy",
    Failed = "failed",
    Canceled = "canceled"
}
export declare class FaxV1Fax extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    direction?: FaxV1FaxDirectionEnum;
    duration?: number;
    from?: string;
    links?: Map<string, any>;
    mediaSid?: string;
    mediaUrl?: string;
    numPages?: number;
    price?: number;
    priceUnit?: string;
    quality?: FaxV1FaxQualityEnum;
    sid?: string;
    status?: FaxV1FaxStatusEnum;
    to?: string;
    url?: string;
}
