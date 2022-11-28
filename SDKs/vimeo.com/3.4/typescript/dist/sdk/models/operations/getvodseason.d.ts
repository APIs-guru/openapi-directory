import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodSeasonPathParams extends SpeakeasyBase {
    ondemandId: number;
    seasonId: number;
}
export declare class GetVodSeasonRequest extends SpeakeasyBase {
    pathParams: GetVodSeasonPathParams;
}
export declare class GetVodSeasonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandSeason?: shared.OnDemandSeason;
}
