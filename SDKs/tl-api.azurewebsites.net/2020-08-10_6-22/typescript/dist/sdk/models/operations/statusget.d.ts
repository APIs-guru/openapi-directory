import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StatusGetQueryParams extends SpeakeasyBase {
    messageId?: string;
}
export declare class StatusGetRequest extends SpeakeasyBase {
    queryParams: StatusGetQueryParams;
}
export declare class StatusGetResponse extends SpeakeasyBase {
    contentType: string;
    messageStatus?: shared.MessageStatus;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
