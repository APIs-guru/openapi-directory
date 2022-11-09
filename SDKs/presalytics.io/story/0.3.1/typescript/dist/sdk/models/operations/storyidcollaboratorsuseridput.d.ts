import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoryIdCollaboratorsUseridPutPathParams extends SpeakeasyBase {
    id: string;
    storyCollaboratorUserid: string;
}
export declare class StoryIdCollaboratorsUseridPutRequest extends SpeakeasyBase {
    pathParams: StoryIdCollaboratorsUseridPutPathParams;
    request: shared.StoryCollaborator;
}
export declare class StoryIdCollaboratorsUseridPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    storyCollaborator?: shared.StoryCollaborator;
}
