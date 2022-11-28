import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleGetRevenueAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: shared.ApiResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
