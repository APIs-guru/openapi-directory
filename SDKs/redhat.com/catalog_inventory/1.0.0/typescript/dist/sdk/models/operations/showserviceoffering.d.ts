import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ShowServiceOfferingPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ShowServiceOfferingRequest extends SpeakeasyBase {
    pathParams: ShowServiceOfferingPathParams;
}
export declare class ShowServiceOfferingResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    serviceOffering?: shared.ServiceOffering;
    statusCode: number;
}
