import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetComparisonShoppingPagesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetComparisonShoppingPagesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetComparisonShoppingPagesIdPathParams;
}


export class GetComparisonShoppingPagesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
