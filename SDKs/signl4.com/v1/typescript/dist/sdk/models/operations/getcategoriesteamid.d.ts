import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoriesTeamIdPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class GetCategoriesTeamIdRequest extends SpeakeasyBase {
    pathParams: GetCategoriesTeamIdPathParams;
}
export declare class GetCategoriesTeamIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    categoryInfos?: shared.CategoryInfo[];
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
