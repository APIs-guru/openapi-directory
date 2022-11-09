import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class EmployersSearchRequest extends SpeakeasyBase {
    request: shared.EmployersSearchRequest;
}
export declare class EmployersSearchResponse extends SpeakeasyBase {
    contentType: string;
    employersSearchResponse?: Map<string, any>;
    statusCode: number;
}
