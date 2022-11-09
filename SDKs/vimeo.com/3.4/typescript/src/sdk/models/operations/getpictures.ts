import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPicturesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetPicturesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetPicturesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPicturesPathParams;

  @Metadata()
  queryParams: GetPicturesQueryParams;
}


export class GetPicturesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Picture })
  pictures?: shared.Picture[];
}
