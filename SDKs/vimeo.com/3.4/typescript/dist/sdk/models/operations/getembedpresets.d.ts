import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmbedPresetsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetEmbedPresetsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetEmbedPresetsRequest extends SpeakeasyBase {
    pathParams: GetEmbedPresetsPathParams;
    queryParams: GetEmbedPresetsQueryParams;
}
export declare class GetEmbedPresetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    presets?: shared.Presets[];
}
