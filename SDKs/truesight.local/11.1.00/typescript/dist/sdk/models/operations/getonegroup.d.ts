import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOneGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetOneGroupRequest extends SpeakeasyBase {
    pathParams: GetOneGroupPathParams;
}
export declare class GetOneGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
