import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomLogoPathParams extends SpeakeasyBase {
    logoId: number;
    userId: number;
}
export declare class GetCustomLogoRequest extends SpeakeasyBase {
    pathParams: GetCustomLogoPathParams;
}
export declare class GetCustomLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
