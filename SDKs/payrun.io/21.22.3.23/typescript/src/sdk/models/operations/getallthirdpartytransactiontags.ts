import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllThirdPartyTransactionTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetAllThirdPartyTransactionTagsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetAllThirdPartyTransactionTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllThirdPartyTransactionTagsPathParams;

  @SpeakeasyMetadata()
  headers: GetAllThirdPartyTransactionTagsHeaders;
}


export class GetAllThirdPartyTransactionTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  linkCollection?: shared.LinkCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
