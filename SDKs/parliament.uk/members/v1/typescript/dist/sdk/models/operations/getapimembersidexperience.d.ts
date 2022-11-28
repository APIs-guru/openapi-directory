import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdExperiencePathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdExperienceRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdExperiencePathParams;
}
export declare class GetApiMembersIdExperienceResponse extends SpeakeasyBase {
    biographyExperienceListItem?: shared.BiographyExperienceListItem;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
