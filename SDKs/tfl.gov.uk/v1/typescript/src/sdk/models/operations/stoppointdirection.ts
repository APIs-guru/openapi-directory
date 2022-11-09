import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopPointDirectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=toStopPointId" })
  toStopPointId: string;
}


export class StopPointDirectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lineId" })
  lineId?: string;
}


export class StopPointDirectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopPointDirectionPathParams;

  @Metadata()
  queryParams: StopPointDirectionQueryParams;
}


export class StopPointDirectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopPointDirection200ApplicationJsonString?: string;

  @Metadata()
  stopPointDirection200ApplicationXmlString?: string;

  @Metadata()
  stopPointDirection200TextJsonString?: string;

  @Metadata()
  stopPointDirection200TextXmlString?: string;
}
