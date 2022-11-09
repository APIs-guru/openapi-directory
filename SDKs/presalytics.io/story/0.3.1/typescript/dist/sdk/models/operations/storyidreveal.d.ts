import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StoryIdRevealPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdRevealRequest extends SpeakeasyBase {
    pathParams: StoryIdRevealPathParams;
}
export declare class StoryIdRevealResponse extends SpeakeasyBase {
    contentType: string;
    loginButton?: string;
    statusCode: number;
    problemDetail?: any;
    revealJsPresenation?: string;
}
