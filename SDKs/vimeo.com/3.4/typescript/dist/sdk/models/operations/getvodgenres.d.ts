import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodGenresResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onDemandGenres?: shared.OnDemandGenre[];
}
