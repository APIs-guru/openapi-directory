import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleAddMeasureUnitRequest extends SpeakeasyBase {
    request: shared.MeasureUnitDto[];
}
export declare class ArticleAddMeasureUnitResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;
    statusCode: number;
}
