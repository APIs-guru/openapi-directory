import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchVersionNumberReverseGeocodePositionExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberReverseGeocodePositionExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=heading" })
  heading?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnRoadUse" })
  returnRoadUse?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnSpeedLimit" })
  returnSpeedLimit?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roadUse" })
  roadUse?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spatialKeys" })
  spatialKeys?: boolean;
}


export class GetSearchVersionNumberReverseGeocodePositionExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSearchVersionNumberReverseGeocodePositionExtPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSearchVersionNumberReverseGeocodePositionExtQueryParams;
}


export class GetSearchVersionNumberReverseGeocodePositionExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
