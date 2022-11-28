import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DetailAdvisoryPathParams extends SpeakeasyBase {
    advisoryId: string;
}
export declare class DetailAdvisorySecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class DetailAdvisoryRequest extends SpeakeasyBase {
    pathParams: DetailAdvisoryPathParams;
    security: DetailAdvisorySecurity;
}
export declare class DetailAdvisoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersAdvisoryDetailResponse?: shared.ControllersAdvisoryDetailResponse;
}
