import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiReferenceAnsweringBodiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameContains" })
  nameContains?: string;
}


export class GetApiReferenceAnsweringBodiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiReferenceAnsweringBodiesQueryParams;
}


export class GetApiReferenceAnsweringBodiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AnsweringBody })
  answeringBodies?: shared.AnsweringBody[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
