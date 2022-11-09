import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetIpIpv4TxtPathParams extends SpeakeasyBase {
    ipv4: string;
}
export declare class GetIpIpv4TxtRequest extends SpeakeasyBase {
    pathParams: GetIpIpv4TxtPathParams;
}
export declare class GetIpIpv4TxtResponse extends SpeakeasyBase {
    contentType: string;
    dateTimeTextResponse?: string;
    errorTextResponse?: string;
    statusCode: number;
}
