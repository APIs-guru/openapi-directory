import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare class GetVodRequest extends SpeakeasyBase {
    pathParams: GetVodPathParams;
}
export declare class GetVodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandPage?: shared.OnDemandPage;
}
