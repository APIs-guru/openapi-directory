import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopPointGetBySmsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StopPointGetBySmsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=output" })
  output?: string;
}


export class StopPointGetBySmsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopPointGetBySmsPathParams;

  @Metadata()
  queryParams: StopPointGetBySmsQueryParams;
}


export class StopPointGetBySmsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
