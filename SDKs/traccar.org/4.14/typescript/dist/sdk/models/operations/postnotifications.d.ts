import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostNotificationsRequest extends SpeakeasyBase {
    request: shared.Notification;
}
export declare class PostNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    notification?: shared.Notification;
    statusCode: number;
}
