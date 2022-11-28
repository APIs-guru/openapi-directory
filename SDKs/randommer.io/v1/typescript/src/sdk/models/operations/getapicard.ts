import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiCardQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetApiCardHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiCardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiCardQueryParams;

  @SpeakeasyMetadata()
  headers: GetApiCardHeaders;
}


export class GetApiCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
