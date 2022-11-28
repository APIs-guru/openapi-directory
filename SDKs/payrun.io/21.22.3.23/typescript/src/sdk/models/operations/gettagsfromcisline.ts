import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTagsFromCisLinePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CisLineId" })
  cisLineId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" })
  subContractorId: string;
}


export class GetTagsFromCisLineHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTagsFromCisLineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagsFromCisLinePathParams;

  @SpeakeasyMetadata()
  headers: GetTagsFromCisLineHeaders;
}


export class GetTagsFromCisLineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  linkCollection?: shared.LinkCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
