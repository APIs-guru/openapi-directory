import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVodPostersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class GetVodPostersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVodPostersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVodPostersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVodPostersQueryParams;
}


export class GetVodPostersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.Picture })
  pictures?: shared.Picture[];
}
