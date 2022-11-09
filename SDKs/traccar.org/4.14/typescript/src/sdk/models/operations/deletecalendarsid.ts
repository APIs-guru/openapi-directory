import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCalendarsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCalendarsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCalendarsIdPathParams;
}


export class DeleteCalendarsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
