import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTagFromPaySchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" })
  payScheduleId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" })
  tagId: string;
}


export class GetTagFromPayScheduleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTagFromPayScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagFromPaySchedulePathParams;

  @SpeakeasyMetadata()
  headers: GetTagFromPayScheduleHeaders;
}


export class GetTagFromPayScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tag?: shared.Tag;
}
