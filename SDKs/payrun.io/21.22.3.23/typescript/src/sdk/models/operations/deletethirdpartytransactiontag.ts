import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteThirdPartyTransactionTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" })
  tagId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ThirdPartyTransactionId" })
  thirdPartyTransactionId: string;
}


export class DeleteThirdPartyTransactionTagHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class DeleteThirdPartyTransactionTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteThirdPartyTransactionTagPathParams;

  @SpeakeasyMetadata()
  headers: DeleteThirdPartyTransactionTagHeaders;
}


export class DeleteThirdPartyTransactionTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
