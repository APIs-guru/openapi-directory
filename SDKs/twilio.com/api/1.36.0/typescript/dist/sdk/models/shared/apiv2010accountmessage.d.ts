import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageEnumDirectionEnum } from "./messageenumdirectionenum";
import { MessageEnumStatusEnum } from "./messageenumstatusenum";
export declare class ApiV2010AccountMessage extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    body?: string;
    dateCreated?: string;
    dateSent?: string;
    dateUpdated?: string;
    direction?: MessageEnumDirectionEnum;
    errorCode?: number;
    errorMessage?: string;
    from?: string;
    messagingServiceSid?: string;
    numMedia?: string;
    numSegments?: string;
    price?: string;
    priceUnit?: string;
    sid?: string;
    status?: MessageEnumStatusEnum;
    subresourceUris?: Map<string, any>;
    to?: string;
    uri?: string;
}
