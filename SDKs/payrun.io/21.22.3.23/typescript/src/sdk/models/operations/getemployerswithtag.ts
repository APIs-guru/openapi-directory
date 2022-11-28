import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmployersWithTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" })
  tagId: string;
}


export class GetEmployersWithTagHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetEmployersWithTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEmployersWithTagPathParams;

  @SpeakeasyMetadata()
  headers: GetEmployersWithTagHeaders;
}


export class GetEmployersWithTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  linkCollection?: shared.LinkCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
