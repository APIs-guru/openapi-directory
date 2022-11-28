import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiMembersIdPortraitPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdPortraitQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cropType" })
  cropType?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=webVersion" })
  webVersion?: boolean;
}


export class GetApiMembersIdPortraitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiMembersIdPortraitPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiMembersIdPortraitQueryParams;
}


export class GetApiMembersIdPortraitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
