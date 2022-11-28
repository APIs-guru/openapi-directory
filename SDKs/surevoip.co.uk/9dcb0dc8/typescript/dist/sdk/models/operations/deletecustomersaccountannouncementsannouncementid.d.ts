import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCustomersAccountAnnouncementsAnnouncementIdPathParams extends SpeakeasyBase {
    account: number;
    announcementId: string;
}
export declare class DeleteCustomersAccountAnnouncementsAnnouncementIdRequest extends SpeakeasyBase {
    pathParams: DeleteCustomersAccountAnnouncementsAnnouncementIdPathParams;
}
export declare class DeleteCustomersAccountAnnouncementsAnnouncementIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
