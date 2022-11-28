import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ShowServicePlanPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ShowServicePlanRequest extends SpeakeasyBase {
    pathParams: ShowServicePlanPathParams;
}
export declare class ShowServicePlanResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    servicePlan?: shared.ServicePlan;
    statusCode: number;
}
