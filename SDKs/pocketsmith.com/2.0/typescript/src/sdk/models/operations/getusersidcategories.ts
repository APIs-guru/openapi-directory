import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersIdCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdCategoriesPathParams;
}


export class GetUsersIdCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Category })
  categories?: shared.Category[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
