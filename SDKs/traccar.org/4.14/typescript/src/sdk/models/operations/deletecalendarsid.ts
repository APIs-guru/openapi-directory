import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCalendarsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCalendarsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCalendarsIdPathParams;
}


export class DeleteCalendarsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
