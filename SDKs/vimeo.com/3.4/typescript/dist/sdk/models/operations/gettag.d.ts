import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagPathParams extends SpeakeasyBase {
    word: string;
}
export declare class GetTagRequest extends SpeakeasyBase {
    pathParams: GetTagPathParams;
}
export declare class GetTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
