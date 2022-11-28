import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleAddMeasureUnitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.MeasureUnitDto })
  request: shared.MeasureUnitDto[];
}


export class ArticleAddMeasureUnitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: shared.ApiResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
