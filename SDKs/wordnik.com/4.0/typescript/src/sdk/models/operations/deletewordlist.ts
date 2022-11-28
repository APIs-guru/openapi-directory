import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWordListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permalink" })
  permalink: string;
}


export class DeleteWordListHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class DeleteWordListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWordListPathParams;

  @SpeakeasyMetadata()
  headers: DeleteWordListHeaders;
}


export class DeleteWordListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
