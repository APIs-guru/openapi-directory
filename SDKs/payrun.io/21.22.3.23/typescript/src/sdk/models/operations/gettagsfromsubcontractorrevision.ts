import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTagsFromSubContractorRevisionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EffectiveDate" })
  effectiveDate: Date;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" })
  subContractorId: string;
}


export class GetTagsFromSubContractorRevisionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTagsFromSubContractorRevisionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagsFromSubContractorRevisionPathParams;

  @SpeakeasyMetadata()
  headers: GetTagsFromSubContractorRevisionHeaders;
}


export class GetTagsFromSubContractorRevisionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  linkCollection?: shared.LinkCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
