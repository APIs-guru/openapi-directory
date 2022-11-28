import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserAndRelatedDataPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUserAndRelatedData200ApplicationJson extends SpeakeasyBase {
    feedback?: shared.Feedback[];
    offerCount?: number;
    posts?: shared.Post[];
    user?: shared.User;
    wantedCount?: number;
}
export declare class GetUserAndRelatedDataRequest extends SpeakeasyBase {
    pathParams: GetUserAndRelatedDataPathParams;
}
export declare class GetUserAndRelatedDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getUserAndRelatedData200ApplicationJsonObject?: GetUserAndRelatedData200ApplicationJson;
}
