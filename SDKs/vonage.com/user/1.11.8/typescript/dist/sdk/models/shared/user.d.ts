import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Contact } from "./contact";
import { UserExtension } from "./userextension";
export declare class User extends SpeakeasyBase {
    contactNumbers?: Contact[];
    email?: string;
    extensions?: UserExtension[];
    firstName?: string;
    id?: number;
    lastName?: string;
    loginName?: string;
}
