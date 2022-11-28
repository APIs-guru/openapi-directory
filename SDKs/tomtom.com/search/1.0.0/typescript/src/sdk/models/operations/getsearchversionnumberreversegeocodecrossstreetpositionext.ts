import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=heading" })
  heading?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spatialKeys" })
  spatialKeys?: boolean;
}


export class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams;
}


export class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
