import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoryIdCollaboratorsInactivePostPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdCollaboratorsInactivePostRequest extends SpeakeasyBase {
    pathParams: StoryIdCollaboratorsInactivePostPathParams;
    request: any;
}
export declare class StoryIdCollaboratorsInactivePostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    storyCollaborator?: shared.StoryCollaborator;
}
