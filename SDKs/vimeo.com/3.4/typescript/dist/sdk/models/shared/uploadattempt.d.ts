import { SpeakeasyBase } from "../../../internal/utils";
import { Video } from "./video";
import { User } from "./user";
export declare class UploadAttempt extends SpeakeasyBase {
    clip?: Video;
    completeUri?: string;
    form?: string;
    ticketId: string;
    uploadLink: string;
    uri: string;
    user: User;
}
