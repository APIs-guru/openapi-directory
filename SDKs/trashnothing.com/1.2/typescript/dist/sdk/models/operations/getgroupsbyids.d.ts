import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupsByIdsQueryParams extends SpeakeasyBase {
    groupIds: string;
}
export declare class GetGroupsByIdsSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetGroupsByIdsRequest extends SpeakeasyBase {
    queryParams: GetGroupsByIdsQueryParams;
    security: GetGroupsByIdsSecurity;
}
export declare class GetGroupsByIdsResponse extends SpeakeasyBase {
    contentType: string;
    groups?: shared.Group[];
    statusCode: number;
}
