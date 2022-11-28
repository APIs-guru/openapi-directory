import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPostClientJavascriptQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_ids" })
  groupIds: string;
}


export class GetPostClientJavascriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPostClientJavascriptQueryParams;
}


export class GetPostClientJavascriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
