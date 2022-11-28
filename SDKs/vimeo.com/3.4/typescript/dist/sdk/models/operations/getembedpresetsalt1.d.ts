import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmbedPresetsAlt1QueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetEmbedPresetsAlt1Request extends SpeakeasyBase {
    queryParams: GetEmbedPresetsAlt1QueryParams;
}
export declare class GetEmbedPresetsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    presets?: shared.Presets[];
}
