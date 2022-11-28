import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubmitAnswersPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class SubmitAnswersRequest extends SpeakeasyBase {
    pathParams: SubmitAnswersPathParams;
    request: Map<string, string>;
}
export declare class SubmitAnswersResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
