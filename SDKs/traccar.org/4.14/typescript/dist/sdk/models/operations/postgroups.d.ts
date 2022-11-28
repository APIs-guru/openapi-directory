import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGroupsRequest extends SpeakeasyBase {
    request: shared.Group;
}
export declare class PostGroupsResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
