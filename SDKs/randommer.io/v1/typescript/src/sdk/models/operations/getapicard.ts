import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiCardQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetApiCardHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiCardRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiCardQueryParams;

  @Metadata()
  headers: GetApiCardHeaders;
}


export class GetApiCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
