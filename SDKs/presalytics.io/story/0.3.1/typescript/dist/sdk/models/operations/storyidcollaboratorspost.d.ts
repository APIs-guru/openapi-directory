import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoryIdCollaboratorsPostPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdCollaboratorsPostRequest extends SpeakeasyBase {
    pathParams: StoryIdCollaboratorsPostPathParams;
    request: any;
}
export declare class StoryIdCollaboratorsPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    storyCollaborator?: shared.StoryCollaborator;
}
