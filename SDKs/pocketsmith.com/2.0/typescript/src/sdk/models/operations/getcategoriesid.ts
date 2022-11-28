import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoriesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCategoriesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoriesIdPathParams;
}


export class GetCategoriesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  category?: shared.Category;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
