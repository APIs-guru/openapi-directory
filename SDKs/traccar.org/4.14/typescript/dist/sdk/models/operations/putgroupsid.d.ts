import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutGroupsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutGroupsIdRequest extends SpeakeasyBase {
    pathParams: PutGroupsIdPathParams;
    request: shared.Group;
}
export declare class PutGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
