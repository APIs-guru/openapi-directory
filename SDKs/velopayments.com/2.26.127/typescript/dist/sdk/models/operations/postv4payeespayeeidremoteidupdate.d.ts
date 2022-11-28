import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV4PayeesPayeeIdRemoteIdUpdatePathParams extends SpeakeasyBase {
    payeeId: string;
}
export declare class PostV4PayeesPayeeIdRemoteIdUpdateRequest extends SpeakeasyBase {
    pathParams: PostV4PayeesPayeeIdRemoteIdUpdatePathParams;
    request: shared.UpdateRemoteIdRequest2;
}
export declare class PostV4PayeesPayeeIdRemoteIdUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
    inlineResponse409?: any;
}
