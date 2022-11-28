import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteUserByIdV2PathParams extends SpeakeasyBase {
    userId: string;
}
export declare class DeleteUserByIdV2Request extends SpeakeasyBase {
    pathParams: DeleteUserByIdV2PathParams;
}
export declare class DeleteUserByIdV2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
