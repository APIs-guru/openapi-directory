import { SpeakeasyBase } from "../../../internal/utils";
import { FlexFlowEnumChannelTypeEnum } from "./flexflowenumchanneltypeenum";
import { FlexFlowEnumIntegrationTypeEnum } from "./flexflowenumintegrationtypeenum";
export declare class FlexV1FlexFlow extends SpeakeasyBase {
    accountSid?: string;
    channelType?: FlexFlowEnumChannelTypeEnum;
    chatServiceSid?: string;
    contactIdentity?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    enabled?: boolean;
    friendlyName?: string;
    integration?: any;
    integrationType?: FlexFlowEnumIntegrationTypeEnum;
    janitorEnabled?: boolean;
    longLived?: boolean;
    sid?: string;
    url?: string;
}
