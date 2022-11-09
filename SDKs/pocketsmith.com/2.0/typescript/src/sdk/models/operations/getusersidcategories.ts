import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersIdCategoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdCategoriesPathParams;
}


export class GetUsersIdCategoriesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Category })
  categories?: shared.Category[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
