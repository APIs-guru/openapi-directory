import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UserInviteOptions extends SpeakeasyBase {
    clientAdmin?: boolean;
    email?: string;
    firstName?: string;
    lastName?: string;
    message?: string;
    orgDefaultRole?: string;
    orgRoles?: Map<string, any>;
    subject?: string;
}
