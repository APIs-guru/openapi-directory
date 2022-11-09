import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountEnumStatusEnum } from "./accountenumstatusenum";
import { AccountEnumTypeEnum } from "./accountenumtypeenum";
export declare class ApiV2010Account extends SpeakeasyBase {
    authToken?: string;
    dateCreated?: string;
    dateUpdated?: string;
    friendlyName?: string;
    ownerAccountSid?: string;
    sid?: string;
    status?: AccountEnumStatusEnum;
    subresourceUris?: Map<string, any>;
    type?: AccountEnumTypeEnum;
    uri?: string;
}
