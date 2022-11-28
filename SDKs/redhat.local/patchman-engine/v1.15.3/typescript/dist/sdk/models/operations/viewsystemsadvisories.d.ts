import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ViewSystemsAdvisoriesSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ViewSystemsAdvisoriesRequest extends SpeakeasyBase {
    request: shared.ControllersSystemsAdvisoriesRequest;
    security: ViewSystemsAdvisoriesSecurity;
}
export declare class ViewSystemsAdvisoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersSystemsAdvisoriesResponse?: shared.ControllersSystemsAdvisoriesResponse;
}
