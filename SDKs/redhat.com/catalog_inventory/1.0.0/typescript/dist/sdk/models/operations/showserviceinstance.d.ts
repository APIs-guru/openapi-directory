import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ShowServiceInstancePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ShowServiceInstanceRequest extends SpeakeasyBase {
    pathParams: ShowServiceInstancePathParams;
}
export declare class ShowServiceInstanceResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    serviceInstance?: shared.ServiceInstance;
    statusCode: number;
}
