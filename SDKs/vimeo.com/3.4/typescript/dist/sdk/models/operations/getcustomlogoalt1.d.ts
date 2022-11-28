import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomLogoAlt1PathParams extends SpeakeasyBase {
    logoId: number;
}
export declare class GetCustomLogoAlt1Request extends SpeakeasyBase {
    pathParams: GetCustomLogoAlt1PathParams;
}
export declare class GetCustomLogoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
