import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRegionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onDemandRegions?: shared.OnDemandRegion[];
}
