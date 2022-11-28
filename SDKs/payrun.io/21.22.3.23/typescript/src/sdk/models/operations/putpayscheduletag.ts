import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutPayScheduleTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" })
  payScheduleId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" })
  tagId: string;
}


export class PutPayScheduleTagHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutPayScheduleTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPayScheduleTagPathParams;

  @SpeakeasyMetadata()
  headers: PutPayScheduleTagHeaders;
}


export class PutPayScheduleTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tag?: shared.Tag;
}
