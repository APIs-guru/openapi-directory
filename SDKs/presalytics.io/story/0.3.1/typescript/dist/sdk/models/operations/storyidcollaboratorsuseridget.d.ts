import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoryIdCollaboratorsUseridGetPathParams extends SpeakeasyBase {
    id: string;
    storyCollaboratorUserid: string;
}
export declare class StoryIdCollaboratorsUseridGetRequest extends SpeakeasyBase {
    pathParams: StoryIdCollaboratorsUseridGetPathParams;
}
export declare class StoryIdCollaboratorsUseridGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    storyCollaborator?: shared.StoryCollaborator;
}
