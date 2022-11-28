import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ShowServiceOfferingNodePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ShowServiceOfferingNodeRequest extends SpeakeasyBase {
    pathParams: ShowServiceOfferingNodePathParams;
}
export declare class ShowServiceOfferingNodeResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    serviceOfferingNode?: shared.ServiceOfferingNode;
    statusCode: number;
}
