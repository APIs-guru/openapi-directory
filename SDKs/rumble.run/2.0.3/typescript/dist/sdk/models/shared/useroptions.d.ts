import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserOptions extends SpeakeasyBase {
    clientAdmin?: boolean;
    email?: string;
    firstName?: string;
    lastName?: string;
    orgDefaultRole?: string;
    orgRoles?: Map<string, any>;
}
