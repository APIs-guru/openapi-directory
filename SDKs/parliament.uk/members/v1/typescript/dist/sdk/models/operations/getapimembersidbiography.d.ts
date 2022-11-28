import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdBiographyPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdBiographyRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdBiographyPathParams;
}
export declare class GetApiMembersIdBiographyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    memberBiographyItem?: shared.MemberBiographyItem;
    statusCode: number;
}
