import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetProjectRequest extends SpeakeasyBase {
    security: GetProjectSecurity;
}
export declare class GetProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
