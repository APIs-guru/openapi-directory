import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UserEnumStateTypeEnum } from "./userenumstatetypeenum";
export declare class FrontlineV1User extends SpeakeasyBase {
    avatar?: string;
    friendlyName?: string;
    identity?: string;
    isAvailable?: boolean;
    sid?: string;
    state?: UserEnumStateTypeEnum;
    url?: string;
}
