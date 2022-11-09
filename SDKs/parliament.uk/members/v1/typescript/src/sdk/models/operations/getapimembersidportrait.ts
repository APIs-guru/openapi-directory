import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiMembersIdPortraitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdPortraitQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cropType" })
  cropType?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=webVersion" })
  webVersion?: boolean;
}


export class GetApiMembersIdPortraitRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdPortraitPathParams;

  @Metadata()
  queryParams: GetApiMembersIdPortraitQueryParams;
}


export class GetApiMembersIdPortraitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
