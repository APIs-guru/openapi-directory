import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmbedPresetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetEmbedPresetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetEmbedPresetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEmbedPresetsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEmbedPresetsQueryParams;
}


export class GetEmbedPresetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Presets })
  presets?: shared.Presets[];
}
