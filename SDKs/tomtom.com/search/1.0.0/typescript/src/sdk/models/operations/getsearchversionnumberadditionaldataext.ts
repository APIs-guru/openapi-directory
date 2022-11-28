import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSearchVersionNumberAdditionalDataExtExtEnum {
    Json = "json"
}


export class GetSearchVersionNumberAdditionalDataExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: GetSearchVersionNumberAdditionalDataExtExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberAdditionalDataExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geometries" })
  geometries: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geometriesZoom" })
  geometriesZoom?: number;
}


export class GetSearchVersionNumberAdditionalDataExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSearchVersionNumberAdditionalDataExtPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSearchVersionNumberAdditionalDataExtQueryParams;
}


export class GetSearchVersionNumberAdditionalDataExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
