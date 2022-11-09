import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFindingPagePathParams extends SpeakeasyBase {
    scanId: number;
}
export declare class GetFindingPageRequest extends SpeakeasyBase {
    pathParams: GetFindingPagePathParams;
}
export declare class GetFindingPageResponse extends SpeakeasyBase {
    contentType: string;
    findings?: shared.Findings[];
    statusCode: number;
}
