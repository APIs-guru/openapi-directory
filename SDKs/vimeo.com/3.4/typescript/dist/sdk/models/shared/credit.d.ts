import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { Video } from "./video";
export declare class Credit extends SpeakeasyBase {
    name: string;
    role: string;
    uri: string;
    user?: User;
    video?: Video;
}
