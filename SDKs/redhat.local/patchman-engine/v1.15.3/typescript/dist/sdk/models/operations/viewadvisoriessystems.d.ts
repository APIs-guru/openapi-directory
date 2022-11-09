import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ViewAdvisoriesSystemsSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ViewAdvisoriesSystemsRequest extends SpeakeasyBase {
    request: shared.ControllersSystemsAdvisoriesRequest;
    security: ViewAdvisoriesSystemsSecurity;
}
export declare class ViewAdvisoriesSystemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersAdvisoriesSystemsResponse?: shared.ControllersAdvisoriesSystemsResponse;
}
