import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArticleGetRevenueAccountsResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: shared.ApiResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;

  @Metadata()
  statusCode: number;
}
