import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTagFromThirdPartyTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" })
  tagId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ThirdPartyTransactionId" })
  thirdPartyTransactionId: string;
}


export class GetTagFromThirdPartyTransactionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTagFromThirdPartyTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagFromThirdPartyTransactionPathParams;

  @SpeakeasyMetadata()
  headers: GetTagFromThirdPartyTransactionHeaders;
}


export class GetTagFromThirdPartyTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tag?: shared.Tag;
}
