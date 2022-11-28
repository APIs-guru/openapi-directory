import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrderServiceOfferingPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OrderServiceOffering200ApplicationJson extends SpeakeasyBase {
    taskId?: string;
}
export declare class OrderServiceOfferingRequest extends SpeakeasyBase {
    pathParams: OrderServiceOfferingPathParams;
    request: shared.OrderParametersServiceOfferingInput;
}
export declare class OrderServiceOfferingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    orderServiceOffering200ApplicationJsonObject?: OrderServiceOffering200ApplicationJson;
}
