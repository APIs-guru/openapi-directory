import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubmitStoryRequestBody extends SpeakeasyBase {
    content: string;
    devicePixelRatio?: number;
    photoIds?: string;
    sharing: string;
    title: string;
}
export declare class SubmitStoryRequest extends SpeakeasyBase {
    request: SubmitStoryRequestBody;
}
export declare class SubmitStoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    story?: shared.Story;
}
