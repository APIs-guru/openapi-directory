import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetComparisonShoppingPagesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetComparisonShoppingPagesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetComparisonShoppingPagesIdPathParams;
}


export class GetComparisonShoppingPagesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
