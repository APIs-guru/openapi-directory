import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCategoriesUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class GetCategoriesUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoriesUuidPathParams;
}


export class GetCategoriesUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
