import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoryIdCollaboratorsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdCollaboratorsGetRequest extends SpeakeasyBase {
    pathParams: StoryIdCollaboratorsGetPathParams;
}
export declare class StoryIdCollaboratorsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    storyCollaborators?: shared.StoryCollaborator[];
}
