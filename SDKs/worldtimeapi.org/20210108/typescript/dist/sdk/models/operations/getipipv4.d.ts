import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetIpIpv4PathParams extends SpeakeasyBase {
    ipv4: string;
}
export declare class GetIpIpv4Request extends SpeakeasyBase {
    pathParams: GetIpIpv4PathParams;
}
export declare class GetIpIpv4Response extends SpeakeasyBase {
    contentType: string;
    dateTimeJsonResponse?: any;
    errorJsonResponse?: any;
    statusCode: number;
}
