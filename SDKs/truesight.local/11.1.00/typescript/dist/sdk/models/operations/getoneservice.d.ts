import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetOneServicePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class GetOneServiceRequest extends SpeakeasyBase {
    pathParams: GetOneServicePathParams;
}
export declare class GetOneServiceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
