import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomLogosPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetCustomLogosRequest extends SpeakeasyBase {
    pathParams: GetCustomLogosPathParams;
}
export declare class GetCustomLogosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    pictures?: shared.Picture[];
}
