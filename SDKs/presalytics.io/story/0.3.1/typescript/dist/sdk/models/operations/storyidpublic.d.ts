import { SpeakeasyBase } from "../../../internal/utils";
export declare class StoryIdPublicPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdPublicRequest extends SpeakeasyBase {
    pathParams: StoryIdPublicPathParams;
}
export declare class StoryIdPublicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    revealJsPresenation?: string;
}
