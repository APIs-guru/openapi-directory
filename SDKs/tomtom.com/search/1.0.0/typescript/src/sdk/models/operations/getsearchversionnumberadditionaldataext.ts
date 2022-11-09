import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSearchVersionNumberAdditionalDataExtExtEnum {
    Json = "json"
}


export class GetSearchVersionNumberAdditionalDataExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: GetSearchVersionNumberAdditionalDataExtExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberAdditionalDataExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=geometries" })
  geometries: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=geometriesZoom" })
  geometriesZoom?: number;
}


export class GetSearchVersionNumberAdditionalDataExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSearchVersionNumberAdditionalDataExtPathParams;

  @Metadata()
  queryParams: GetSearchVersionNumberAdditionalDataExtQueryParams;
}


export class GetSearchVersionNumberAdditionalDataExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
