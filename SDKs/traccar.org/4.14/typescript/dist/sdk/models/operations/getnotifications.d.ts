import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNotificationsQueryParams extends SpeakeasyBase {
    all?: boolean;
    deviceId?: number;
    groupId?: number;
    refresh?: boolean;
    userId?: number;
}
export declare class GetNotificationsRequest extends SpeakeasyBase {
    queryParams: GetNotificationsQueryParams;
}
export declare class GetNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    notifications?: shared.Notification[];
    statusCode: number;
}
