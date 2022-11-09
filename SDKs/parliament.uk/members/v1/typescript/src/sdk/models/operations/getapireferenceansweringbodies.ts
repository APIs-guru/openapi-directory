import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiReferenceAnsweringBodiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameContains" })
  nameContains?: string;
}


export class GetApiReferenceAnsweringBodiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiReferenceAnsweringBodiesQueryParams;
}


export class GetApiReferenceAnsweringBodiesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AnsweringBody })
  answeringBodies?: shared.AnsweringBody[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
