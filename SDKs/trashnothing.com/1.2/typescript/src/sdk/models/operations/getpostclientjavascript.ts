import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPostClientJavascriptQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_ids" })
  groupIds: string;
}


export class GetPostClientJavascriptRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPostClientJavascriptQueryParams;
}


export class GetPostClientJavascriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
